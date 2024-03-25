import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/wallpaper-escola.png')}
          style={{ width: 500, height: 800 }}
        />
        <Text style={styles.titulo}>ICFEB</Text>

        <View>
          <Text style={styles.texto}>Instituto de cadastramento e fundação das escolas brasileiras.</Text>
        </View>
      </View>
    </ScrollView>
  );
}