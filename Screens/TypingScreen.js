import { useState } from "react";
import { StyleSheet,Text,View,TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import Header from "../components/Header";
import TypingGame from "../components/TypingGame";
import Instructions from "../components/Instructions";
import ResultScreen from "../Screens/ResultScreen"; 

export default function TypingScreen() {

   function formatTime(remainingTime) {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    const [isPlaying, setIsPlaying] = useState(false);
    const [key, SetKey] = useState(0);
    const [phase,setPhase] = useState('initial'); 
    const [result,setResult]=useState(null);

    return (
      <View style={styles.container}>
        <Header style={styles.header} />
         
         <View style={styles.holder}>

                 <CountdownCircleTimer
                  key={key}
                  isPlaying={isPlaying}
                  duration={10}
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[7, 5, 2, 0]}
                  size={wp('30%')}
                  onComplete={() => {
                     setPhase("submit");
                     setIsPlaying(false);
                     return { shouldRepeat: false }; 
                  }}
                  >
                    {({ remainingTime }) => <Text style={{ fontSize: 20, color: 'white' }}>{formatTime(remainingTime)}</Text>}
                 </CountdownCircleTimer>


                 <TouchableOpacity
                  style={[styles.endButton,{backgroundColor:isPlaying?'red':'green'}]}
                  onPress={() => {
                    if (isPlaying) {
                     
                      setPhase("submit");
                      setIsPlaying(false);
                    } else {
                     
                      setIsPlaying(true);
                      SetKey(prevKey => prevKey + 1); 
                      setPhase('playing');
                    }
                  }}
                  >
                    <Text style={styles.endtext}>{isPlaying ? "End" : "Start"}</Text>
                </TouchableOpacity>

         </View>
        
       {phase === "initial" && <Instructions />}
       {phase === "playing" && 
       <TypingGame 
       onComplete={(data) => {
            setResult(data);
            
          }}
          triggerEnd={phase === "submit"}
        />}
       {phase === "submit" && result && <ResultScreen data={result}/>}
        
      </View>
    );
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#5D52F7',
  },
  holder:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginTop:hp('2%'),
    marginBottom:hp('2%')
  },
  endButton:{
    backgroundColor:'red',
    padding:10,
    borderRadius:10,
    width:wp('20%'),
  },
  endtext:{
    color:'white',
    fontSize:20,
    textAlign:'center'
  },
  instructions:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('5%'),
    padding:20,
  },
  instructionstext1:{
    textAlign:'center',
    fontSize:wp('7%'),
    fontWeight:'bold',
    color:'white'
  },
  instructionstext2:{
    textAlign:'center',
    marginTop:hp('2%'),
    fontSize:wp('4%'),
    color:'white',
    lineHeight:hp('3%')
  }
});
