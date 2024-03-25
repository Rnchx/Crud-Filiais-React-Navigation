import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

import schoolsRepository from "../../models/Schools/Schools";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editSchool = () => {
    navigation.navigate("Form", { school: data, edit: true });
  }

  const deleteSchool = () => {
    schoolsRepository.delete(data.id);
    navigation.navigate("Schools");
  }

  return (
    <View style={styles.container}>
      <Title title="Profile" />

      {data ? (
        <Text>Detalhes da Escola</Text>
      ) : (
        <Text>Selecione uma escola para exibir seus detalhes</Text>
      )}

      <View style={styles.school}>
        <Title title="School" />
        <Text style={styles.text}>{data.nome}</Text>
        <Text style={styles.text}>{data.fundacao}</Text>
        <Text style={styles.text}>{data.corPrimaria}</Text>
        <Text style={styles.text}>{data.corSecundaria}</Text>
        <Text style={styles.text}>{data.qntdFuncionarios}</Text>
        <Text style={styles.text}>{data.qntddAlunos}</Text>
        <Text style={styles.text}>{data.qntddTurmas}</Text>
        <Text style={styles.text}>{data.bairro}</Text>
        <Text style={styles.text}>{data.cidade}</Text>
        <Text style={styles.text}>{data.cep}</Text>
        <Text style={styles.text}>{data.telefone}</Text>
        <Text style={styles.text}>{data.nomeDoResponsavel}</Text>
        <Text style={styles.text}>{data.cargoDoResponsavel}</Text>

        <View style={styles.schoolActions}>
          <TouchableOpacity style={styles.editButton} onPress={editSchool}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deleteSchool}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}