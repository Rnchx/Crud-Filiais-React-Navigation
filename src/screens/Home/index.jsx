import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Title title="ICFEB" />

        <View>
          <Text style={styles.texto}>Instituto de cadastramento e fundação das escolas brasileiras.</Text>
        </View>
        <Image
          source={require('../../../assets/wallpaper-escola.png')}
          style={{ width: 500, height: 700 }}
        />
      </View>
    </ScrollView>
  );
}