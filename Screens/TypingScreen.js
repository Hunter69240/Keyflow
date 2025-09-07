import { useState } from "react";
import { StyleSheet,Text,View,TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { Dropdown } from 'react-native-element-dropdown';

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
    const [triggerEnd, setTriggerEnd] = useState(false);
    const [duration,setDuration]=useState(60);

    const durationarray=[
      {label:'10 Seconds',value:10},
      {label:'30 Seconds',value:30},
      {label:'60 Seconds',value:60},
      {label:'120 Seconds',value:120},
      {label:'180 Seconds',value:180},
    ]
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
         
         <View style={styles.holder}>
  
                 
                 <CountdownCircleTimer
                  key={key}
                  isPlaying={isPlaying}
                  duration={duration}
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[7, 5, 2, 0]}
                  size={wp('30%')}
                  onComplete={() => {
                     setTriggerEnd(true);   // ✅ just trigger
                     setIsPlaying(false);   // ✅ stop timer
                     return { shouldRepeat: false }; 
                  }}
                  >
                    {({ remainingTime }) => <Text style={{ fontSize: 20, color: 'white' }}>{formatTime(remainingTime)}</Text>}
                 </CountdownCircleTimer>


                  <Dropdown
                   data={durationarray}
                   style={styles.dropdown}
                   labelField="label"
                   valueField="value"
                   placeholder="Select Duration"
                   value={duration}
                   onChange={item => {
                     setDuration(item.value);}}
                   />
                   

                 <TouchableOpacity
                  style={[styles.endButton,{backgroundColor:isPlaying?'red':'green'}]}
                  onPress={() => {
                    if (isPlaying) {
                      setIsPlaying(false);
                      setTriggerEnd(true);   // ✅ only trigger, don't setPhase yet
                    } else {
                      setIsPlaying(true);
                      SetKey(prevKey => prevKey + 1); 
                      setPhase('playing');
                      setTriggerEnd(false);
                      setResult(null);
                    }
                  }}
                  >
                    <Text style={styles.endtext}>{isPlaying ? "End" : "Start"}</Text>
                </TouchableOpacity>

         </View>
        
       {phase === "initial" && <Instructions />}
       
        {phase === "playing" && (
          <TypingGame 
          duration={duration}
            onComplete={(data)=>{
              setResult(data);
              setPhase("result");   
            }}
            triggerEnd={triggerEnd}
          />
        )}

        {phase === "result" && <ResultScreen data={result} />}
       
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
  },
  dropdown:{
    width: wp('40%'),
    height: hp('6%'),
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
