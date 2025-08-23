
import RecentTests from "../assets/Images/RecentTests.png";
import Start from "../assets/Images/Start.png";
import TypingImage from "../assets/Images/TypingImage.png";

import { StyleSheet,Text,View,Image,TouchableOpacity} from "react-native";

export default function Home({navigation}) {
    return (
      <View style={styles.container}>
        <Image source={TypingImage} style={{width:200,height:200,marginBottom:20}} />
        <Text style={styles.appname}>Key Flow </Text>

        <Text style={styles.desc}>Find Your typing groove </Text>

        <View style={styles.controls}>

            <TouchableOpacity style={styles.previoustests}>
                <Image source={RecentTests} style={{width:100,height:100,margin:20}} />
                <Text style={styles.text}>Previous Tests</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.start} onPress={()=>navigation.navigate('TypingScreen')}>
                <Image source={Start} style={{width:100,height:100,margin:20}} />
                <Text style={styles.text}>Start</Text>
            </TouchableOpacity>
        
        </View>
        
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'#5D52F7'
    },
    appname:{
        fontSize:40,
        fontWeight:'bold',
        color:'white',
        marginBottom:10
    },
    desc:{
        fontSize:20,    
        color:'white'
    },
    controls:{
        flexDirection:'row',
        marginTop:50,
        justifyContent:'space-between',
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        textAlign:'center'
    }
});