import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.tituloFundacao}>ICFEB</Text>

        <View style={styles.containerNomeFundacao}>
          <Text style={styles.texto}>Instituto de Cadastramento e Fundação das Escolas Brasileiras</Text>
        </View>
        <Image
          source={require('../../../assets/wallpaper-escola.png')}
          style={{ width: 500, height: 800 }}
        />
        <Text style={styles.titulo}>Fundador</Text>

        <View>
          <View style={styles.containerImagemPai}>
        <View style={styles.containerImagem}>
          <Image
            source={require('../../../assets/dom-pedro.png')}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
          </View>
          </View>
          <View style={styles.containerNome}>
          <Text style={styles.nome}>Leopoldo Marechal Vieira Rocha II</Text>
          </View>
        </View>
        <View style={styles.containerTextoHistoria}>
          <Text style={styles.textoHistoria}>
            Leopoldo Marechal Vieira Rocha II nasceu em uma pequena cidade do interior do Brasil, em 15 de agosto de 1955. Desde cedo, Leopoldo demonstrou uma paixão ardente pelo conhecimento e uma forte convicção de que a educação era a chave para transformar vidas e sociedades. Filho de professores, cresceu em um ambiente onde a importância da instrução era valorizada e defendida.

            Ao longo de sua vida, Leopoldo testemunhou as disparidades educacionais que afligiam muitas comunidades, especialmente aquelas distantes dos grandes centros urbanos. Viu jovens talentosos e ávidos por aprenderem sendo barrados pelas barreiras socioeconômicas que limitavam seu acesso à educação de qualidade. Essa realidade o impulsionou a agir.

            Foi em 1985, após anos de estudo e reflexão sobre o sistema educacional brasileiro, que Leopoldo decidiu tomar medidas concretas para enfrentar esse problema. Com uma visão audaciosa e determinação inabalável, fundou o Instituto de Cadastramento e Fundação das Escolas Brasileiras (ICFEB). Sua missão era clara: proporcionar educação de excelência a todos os jovens brasileiros, independentemente de sua condição social ou econômica.

            O ICFEB nasceu como um instituto federal público, dedicado a identificar comunidades carentes de recursos educacionais e a estabelecer escolas de qualidade nessas regiões. Leopoldo Marechal Vieira Rocha II liderou o instituto com paixão e comprometimento, trabalhando incansavelmente para angariar recursos, formar parcerias e mobilizar a sociedade em prol da educação inclusiva.

            O trabalho do ICFEB não se limitou apenas à construção de escolas. O instituto também implementou programas inovadores de capacitação de professores, desenvolvimento de currículos adaptados à realidade local e oferta de bolsas de estudo para estudantes talentosos, mas desfavorecidos.

            A visão de Leopoldo Marechal Vieira Rocha II para o ICFEB não era apenas proporcionar educação formal, mas também cultivar um ambiente de aprendizado que inspirasse os jovens a alcançarem todo o seu potencial. Ele acreditava que investir na educação era investir no futuro do país, criando uma sociedade mais justa, igualitária e próspera.

            Ao longo dos anos, o trabalho incansável de Leopoldo e sua equipe no ICFEB transformou inúmeras vidas e comunidades em todo o Brasil. Jovens que antes estavam destinados a um futuro limitado agora tinham acesso a oportunidades infinitas por meio da educação. O legado de Leopoldo Marechal Vieira Rocha II perdura até hoje, inspirando gerações futuras a acreditarem no poder transformador da educação e a lutarem por um mundo onde todos tenham acesso a ela.
          </Text>
        </View>
        <Image
          source={require('../../../assets/icone.png')}
          style={{ width: 450, height: 770 }}
        />
      </View>
    </ScrollView>
  );
}