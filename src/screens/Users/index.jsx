import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { mockedBranchs } from "../../data/branchs/data";

import School from "../../models/Schools/School";
import SchoolsList from "../../models/Schools/Schools";
import { useNavigation } from "@react-navigation/native";

const schoolList = new SchoolsList();

let schoolId = 1; // Inicia o ID do usuário

export default function Schools() {
  const navigation = useNavigation();

  const [nome, setNome] = ("");
  const [fundacao, setfundacao] = ("");
  const [corPrimaria, setcorPrimaria] = ("");
  const [corSecundaria, setcorSecundaria] = ("");
  const [qntdFuncionarios, setqntdFuncionarios] = ("");
  const [qntddAlunos, setqntddAlunos] = ("");
  const [qntddTurmas, setqntddTurmas] = ("");
  const [bairro, setbairro] = ("");
  const [cidade, setcidade] = ("");
  const [cep, setcep] = ("");
  const [telefone, settelefone] = ("");
  const [email, setemail] = ("");
  const [nomeDoResponsavel, setnomeDoResponsavel] = ("");
  const [cargoDoResponsavel, setcargoDoResponsavel] = ("");

  const [allSchools, setAllSchools] = useState([]);

  const createSchool = () => {
    const newSchool = new School(schoolId++, nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios, qntddAlunos, qntddTurmas, bairro, cidade, cep, telefone, email, nomeDoResponsavel, cargoDoResponsavel || 0); // Incrementa o ID após o uso

    schoolList.createSchools(newSchool)
    setAllSchools(schoolList.getAllSchools());

    clearInputs();

    return newSchool;
  };

  const clearInputs = () => {
    setNome("");
    setfundacao("");
    setcorPrimaria("");
    setcorSecundaria("");
    setqntdFuncionarios("");
    setqntddAlunos("");
    setqntddTurmas("");
    setbairro("");
    setcidade("");
    setcep("");
    settelefone("");
    setemail("");
    setnomeDoResponsavel("");
    setcargoDoResponsavel("");
  };

  return (
    <View style={styles.container}>
      <Title title="Escolas" />

      <View>
        <TextInput
          placeholder="Digite o nome do aluno"
          style={styles.userInput}
          onChangeText={setNome}
          value={nome}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setfundacao}
          value={fundacao}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setcorPrimaria}
          value={corPrimaria}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setcorSecundaria}
          value={corSecundaria}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setqntdFuncionarios}
          value={qntdFuncionarios}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setqntddAlunos}
          value={qntddAlunos}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setqntddTurmas}
          value={qntddTurmas}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setbairro}
          value={bairro}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setcidade}
          value={cidade}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setcep}
          value={cep}

        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={settelefone}
          value={telefone}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setemail}
          value={email}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setnomeDoResponsavel}
          value={nomeDoResponsavel}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setcargoDoResponsavel}
          value={cargoDoResponsavel}
        />

        <TouchableOpacity style={styles.button} onPress={createSchool}>
          <Text>Criar Usuário</Text>
        </TouchableOpacity>
      </View>

      <View>
        {allSchools.length > 0 ? (
          allSchools.map((mockedBranchs) => (
            <TouchableOpacity
              key={mockedBranchs.id}
              onPress={() => navigation.navigate("Profile", { data: mockedBranchs })}
            >
              <Text>{mockedBranchs.nome}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Não há usuários cadastrados</Text>
        )}
      </View>

      <TouchButton route="Category" title="Go to Category" />
      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}