import { StyleSheet,Text,View } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import Header from "../components/Header";

export default function TypingScreen() {
   function formatTime(remainingTime) {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    return (
      <View style={styles.container}>
        <Header style={styles.header} />

         <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          size={wp('30%')}>
            {({ remainingTime }) => <Text style={{ fontSize: 20, color: 'white' }}>{formatTime(remainingTime)}</Text>}
        </CountdownCircleTimer>


        <Text>Typing Screen</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#5D52F7',
  }
});