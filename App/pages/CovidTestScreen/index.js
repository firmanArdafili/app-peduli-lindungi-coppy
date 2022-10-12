import * as React from 'react';
import {
    View,
    Text, 
    SafeAreaView, 
    StyleSheet,
    StatusBar, 
    Image,
    TouchableOpacity
} from 'react-native';
import {
    IconBack,
    IconEmpty
} from '../../assets';

export default CovidTestScreen = ({navigation}) => {
  
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar
                      barStyle="light-content"
                      animated={true}
                      backgroundColor="#ffffff" />

          <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
              <Image source={IconBack} style={styles.back}/>
            </TouchableOpacity>
            <Text style={styles.textjudul}>Hasil Tes COVID-19</Text>
          </View>

          <View style={styles.body}>
            <Image source={IconEmpty} style={styles.empty}/>
          </View>

          <View style={styles.textbody}>
            <Text style={styles.isiempty}>Anda belum memiliki riwayat hasil tes COVID-19</Text>
            <Text style={styles.isiempty}>results. Pastikan Anda melakukan tes COVID-19 di lab yang</Text>
            <Text style={styles.isiempty}>terafiliasi oleh KEMENKES: <Text style={styles.textbiru}>Lab tes PCR </Text>atau</Text>
            <Text style={styles.textbiru}>Lab tes Antigen </Text>
          </View>

        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor: '#ffffff',
      },
      header: {
        backgroundColor:'#ffffff',
        marginTop:45,
        alignItems: 'center',
        flexDirection:'row'
      },
      back:{
        height:20,
        width:20,
        marginLeft:20
      },
      textjudul:{
        marginLeft:15,
        fontSize:18,
        textAlign:'left',
        color: 'black',
        fontFamily:'Lato-Bold'
      },
      body:{
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'#ffffff',
        marginTop:60,
      },
      empty:{
        height:220,
        width:220
      },
      textbody:{
        textAlign:'center',
        alignItems:'center',
        marginTop:30
      },
      isiempty:{
        fontSize:13
      },
      textbiru:{
        fontSize:13,
        color:'#54B9ED'
      }
    });