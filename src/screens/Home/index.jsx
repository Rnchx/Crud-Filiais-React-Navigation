import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>ICFEB</Text>

        <View>
          <Text style={styles.texto}>Instituto de cadastramento e fundação das escolas brasileiras.</Text>
        </View>
        <Image
          source={require('../../../assets/wallpaper-escola.png')}
          style={{ width: 500, height: 800 }}
        />
        <Text style={styles.titulo}>Fundador</Text>

        <View>
          <Image
            source={require('../../../assets/dom-pedro.png')}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
          <Text style={styles.texto}>Leopoldo Marechal Vieira Rocha II</Text>
        </View>
      </View>
    </ScrollView>
  );
}