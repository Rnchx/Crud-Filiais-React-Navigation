import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import mockedBranchs from "../../data/branchs/data"
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />

      <TouchButton route="Profile" title="Go to Profile" data={mockedBranchs} />

      <TouchButton route="Category" title="Go to Category" />

      <TouchButton route="Users" title="Go to Users" />
    </View>
  );
}