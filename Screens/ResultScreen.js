import { StyleSheet,Text,View } from "react-native";

export default function ResultScreen({data}) {
   if(data){
      fetch('{Your API Url}',{
         method:'POST',
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
            console.log("Saved to DB ✅", data);
      })
      .catch(error => {
            console.error("Error saving result ❌", error);
      });
   }
   if (!data) {
      return (
         <View style={styles.container}>  
            <Text style={styles.text}>No data available.</Text>
         </View>
      );
   }
    return (
      <View style={styles.container}>  
         <Text style={styles.text}>Typing Test Results</Text> 
         <Text style={styles.text}>Target Sentence: {data.target}</Text>
         <Text style={styles.text}>Your Input: {data.usertyped}</Text> 
         <Text style={styles.text}>Correct Words: {data.correctWords} / {data.totalWords}</Text> 
         <Text style={styles.text}>Accuracy: {data.accuracy}%</Text> 
         <Text style={styles.text}>WPM: {data.wpm}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    marginVertical: 5,
    textAlign: "center",
  },
});
