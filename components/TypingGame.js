import { useState, useEffect } from "react";   // ✅ add useEffect
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function TypingGame({ onComplete, triggerEnd,duration }) {   // ✅ add triggerEnd here

  const wordsarray = {
    1: "The quick brown fox jumps over the lazy dog",
    2: "Coding every day improves problem solving skills",
    3: "React Native lets you build apps for Android and iOS",
    4: "Typing fast requires both speed and accuracy",
    5: "Practice makes perfect when learning new skills",
    6: "Consistent practice in typing not only improves speed but also enhances overall accuracy and confidence",
    7: "Building projects in React Native helps you learn how to solve real-world problems with mobile apps",
    8: "Technology evolves rapidly, so developers must keep learning and adapting to stay ahead in the field",
    9: "Typing is a valuable skill that saves time, improves communication, and boosts overall productivity at work",
    10: "Even small improvements in typing speed can make a huge difference over long writing or coding sessions",
  };

  const randomnumber = Math.floor(Math.random() * 10) + 1;
  const [target, setTarget] = useState(wordsarray[randomnumber]);
  const [userInput, setUserInput] = useState("");

  const targetWords = target.split(" ");
  const typedWords = userInput.trim().split(/\s+/);

  const wordStatus = targetWords.map((word, index) => {
    if (!typedWords[index]) return "pending";
    return typedWords[index] === word ? "correct" : "incorrect";
  });


  useEffect(() => {   
  if (triggerEnd) { 
    const correctWords = wordStatus.filter(status => status === "correct").length;
    const totalWords = targetWords.length;
    const accuracy = totalWords === 0 ? 0 : (correctWords / totalWords) * 100;

    const minutes = duration / 60;
    const wpm = minutes > 0 ? (correctWords / minutes) : 0;

    onComplete({
      target,
      userTyped: userInput,   
      correctWords,
      totalWords,
      accuracy: accuracy.toFixed(2),
      wpm: wpm.toFixed(2),   
    });
  }
}, [triggerEnd]); 

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

          
          <Text style={styles.targetSentence}>
            {targetWords.map((word, i) => (
              <Text
                key={i}
                style={{
                  color:
                    wordStatus[i] === "correct" ? "green" :
                    wordStatus[i] === "incorrect" ? "red" : "white",
                  fontSize: wp('5%')
                }}
              >
                {word + " "}
              </Text>
            ))}
          </Text>

          
          <TextInput
            style={styles.input}
            multiline
            placeholder="Start typing here..."
            placeholderTextColor="white"
            value={userInput}
            onChangeText={setUserInput}
          />

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D52F7',
    padding: 20,
  },
  targetSentence: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    fontSize: wp('4%'),
    color: 'white',
    textAlignVertical: 'top',
  },
});
