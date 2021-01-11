import React from 'react';
import {View, StyleSheet,TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';



const Searchbar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style = {styles.backgroundStyle}>
        <Feather name="search" color="black" style={styles.iconStyle} size={30}/>
        <TextInput
        autoCapitalize='none'
        autoCorrect={false} 
        placeholder='Search' 
        style={styles.inputStyle} 
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        
        />
        </View>
    );
};

const styles=StyleSheet.create({
    backgroundStyle:{
        marginTop:15,
        backgroundColor:'#B6B6B4',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
        fontSize:18,
        flex:1
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
    });

export default Searchbar;