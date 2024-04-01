import { View, Text } from "react-native";

import styles from "./styles";

const StyleTextInput = ({ texto }) => {
  return (
    <View>
      <Text style={styles.text}>{texto}</Text>
    </View>
  );
};

export default Title;