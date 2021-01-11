import React from 'react';
import {StyleSheet, View, Text,FlatList,TouchableOpacity} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import {withNavigation} from 'react-navigation';


const ResultsList = ({title,results,navigation}) =>{
    if(!results.length){
    return null;
    }

    return(
        <View>
            <Text style={styles.titles}>{title}</Text>
    
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={results}
    keyExtractor={(result)=>result.id}
    renderItem={({item})=>{
        return(
        <TouchableOpacity onPress={()=>navigation.navigate('ResultShow',{id:item.id})}>
        <ResultsDetail result = {item}/>
        </TouchableOpacity>
        )
    }}
    />
        </View>
    )
};
const styles=StyleSheet.create({
    titles:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15
    }
});

export default withNavigation(ResultsList);