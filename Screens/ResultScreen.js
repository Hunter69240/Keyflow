import { StyleSheet,Text,View } from "react-native";

export default function ResultScreen({data}) {
    return (
      <View style={styles.container}>
        <Text>Result Screen</Text>
        <Text>{data.target}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
});