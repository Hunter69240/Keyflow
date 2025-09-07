import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import PreviousCard from "../components/PreviousCard";

export default function PreviousTest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("{Your URL here}") 
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <Text>No Previous Tests</Text>
      ) : (
        <View style={styles.cardcontainer}>
          {data.map((item, index) => {
            return <PreviousCard key={index} data={item} />;
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  cardcontainer: {
    flexDirection: "column", 
    width: "100%", 
    alignItems: "center", 
  },
});
