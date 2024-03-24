import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import schoolsRepository from "../../models/Schools/Schools";
import School from "../../models/Schools/School";

export default function Form({ route }) {
  let{ school, edit } = route.params;

  const [nome, setNome] = useState("");
  const [fundacao, setFundacao] = useState("");
  const [corPrimaria, setCorPrimaria] = useState("");
  const [corSecundaria, setCorSecundaria] = useState("");
  const [qntdFuncionarios, setQntddFuncionarios] = useState("");
  const [qntddAlunos, setQntddAlunos] = useState("");
  const [qntddTurmas, setQntddTurmas] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [nomeDoResponsavel, setNomeDoResponsavel] = useState("");
  const [cargoDoResponsavel, setCargoDoResponsavel] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);
  
  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setNome(school.nome);
      setFundacao(school.fundacao);
      setCorPrimaria(school.corPrimaria);
      setCorSecundaria(school.corSecundaria);
      setQntddFuncionarios(school.qntdFuncionarios);
      setQntddAlunos(school.qntddAlunos);
      setQntddTurmas(school.qntddTurmas);
      setBairro(school.bairro);
      setCidade(school.cidade);
      setCep(school.cep);
      setTelefone(school.telefone);
      setEmail(school.email);
      setNomeDoResponsavel(school.nomeDoResponsavel);
      setCargoDoResponsavel(school.cargoDoResponsavel);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [school, edit]);

  const handleSchoolAction = () => {
    if (isUpdate) {
      schoolsRepository.Update(school.id, nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios, qntddAlunos, qntddTurmas, bairro, cidade,
        cep, telefone, email, nomeDoResponsavel, cargoDoResponsavel || 0);
      clearInputs();
    } else {
      const newSchool = new School(nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios, qntddAlunos, qntddTurmas, bairro, cidade,
        cep, telefone, email, nomeDoResponsavel, cargoDoResponsavel || 0);
      schoolsRepository.add(newSchool);
      clearInputs();
    }
    navigation.navigate("Schools");
  }

  const clearInputs = () => {

    setIsUpdate(false);
    edit = false;
    setNome("");
      setFundacao("");
      setCorPrimaria("");
      setCorSecundaria("");
      setQntddFuncionarios("");
      setQntddAlunos("");
      setQntddTurmas("");
      setBairro("");
      setCidade("");
      setCep("");
      setTelefone("");
      setEmail("");
      setNomeDoResponsavel("");
      setCargoDoResponsavel("");
  };

  return (
    <View style={styles.container}>
      <Title title={isUpdate ? "Editar Escola" : "Nova Escola"} />
      <TextInput
        placeholder="Digite o nome da Escola"
        style={styles.schoolInput}
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        placeholder="Digite o ano de Fundação da Escola"
        style={styles.schoolInput}
        onChangeText={setFundacao}
        value={fundacao}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite a cor Primária representante da Escola"
        style={styles.schoolInput}
        onChangeText={setCorPrimaria}
        value={corPrimaria}
      />
      <TextInput
        placeholder="Digite a cor Secundária representante da Escola"
        style={styles.schoolInput}
        onChangeText={setCorSecundaria}
        value={corSecundaria}
      />
      <TextInput
        placeholder="Digite a quantidade de funcionários que trabalham na instituição"
        style={styles.schoolInput}
        onChangeText={setQntddFuncionarios}
        value={qntdFuncionarios}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite a quantidade de Alunos que estudam na instituição"
        style={styles.schoolInput}
        onChangeText={setQntddAlunos}
        value={qntddAlunos}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite a quantidade de turmas que existem na instituição"
        style={styles.schoolInput}
        onChangeText={setQntddTurmas}
        value={qntddTurmas}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite o bairro que a instuição é localizada"
        style={styles.schoolInput}
        onChangeText={setBairro}
        value={bairro}
      />
      <TextInput
        placeholder="Digite a cidade onde a instituição é localizada"
        style={styles.schoolInput}
        onChangeText={setCidade}
        value={cidade}
      />
      <TextInput
        placeholder="Digite o CEP da instituição"
        style={styles.schoolInput}
        onChangeText={setCep}
        value={cep}
        keyboardType="numeric"
        maxLength={8}
      />
      <TextInput
        placeholder="Digite o telefone da instituição"
        style={styles.schoolInput}
        onChangeText={setTelefone}
        value={telefone}
        keyboardType="numeric"
        maxLength={11}
      />
      <TextInput
        placeholder="Digite o email da instituição"
        style={styles.schoolInput}
        onChangeText={setEmail}
        value={email}
        maxLength={100} 
      />
      <TextInput
        placeholder="Digite o nome do responsável da instituição"
        style={styles.schoolInput}
        onChangeText={setNomeDoResponsavel}
        value={nomeDoResponsavel}
        maxLength={100} 
      />
      <TextInput
        placeholder="Digite o cargo do responsável pela instituição"
        style={styles.schoolInput}
        onChangeText={setCargoDoResponsavel}
        value={cargoDoResponsavel}
        maxLength={100} 
      />

      <TouchableOpacity style={styles.button} onPress={handleSchoolAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Fundar Escola"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}