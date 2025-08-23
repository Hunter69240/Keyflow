import TypingImage from "../assets/Images/TypingImage.png";

import { StyleSheet,Text,View,Image,TouchableOpacity} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => {navigation.navigate('Home')}} >
            <AntDesign name="arrowleft" color="white" size={wp('7%')} />
        </TouchableOpacity>

        <View>
            <Image source={TypingImage} style={{width:wp('15%'), height:hp('10%'), resizeMode:'contain'}}/>
        </View>
        
      </View>
    );
}

const styles = StyleSheet.create({
    container:{ 
        marginTop:hp('7%'),
        marginLeft:wp('5%'),
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:wp('5%'),
        alignItems:'center',
    },
});