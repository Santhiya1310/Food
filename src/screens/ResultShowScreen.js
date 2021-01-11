import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text,Image, FlatList} from 'react-native';
import yelp from '../api/yelp.js';


const ResultShowScreen = ({navigation}) => {

    const [result,setResult]=useState(null);
    const id=navigation.getParam('id');
    console.log(result);

    const getResult = async(id) =>{
        const response=await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(()=>{
        getResult(id);
    },[])

    if(!result){
        return null;
    }
    

    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList
            keyExtractor={(photo)=>photo}
            data={result.photos}
            renderItem={({item})=>{
                return <Image style={styles.image} source={{uri:item}}></Image>
            }}/>
        </View>
    )
}

const styles=StyleSheet.create({
    image:{
        height:150,
        width:300,
        marginBottom:20
    }
});

export default ResultShowScreen;