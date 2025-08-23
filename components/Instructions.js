import { StyleSheet,View,Text } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Instructions() {
    return (
        <View style={styles.container}>
            <Text style={styles.instructionstext1}>
                Welcome to the Typing Speed Test!
            </Text> 

            <Text style={styles.instructionstext2}>
              ⌨️ Type as fast and accurately as you can within 60 seconds.{"\n"}
              🚀 Press Start to begin the challenge.{"\n"}
              🏆 See how many words per minute you can score!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
      container:{
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