import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Searchbar from '../components/Searchbar';
import useResults from '../hooks/useResults.js'
import ResultsList from '../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [errorMessage,results,searchApi] =useResults();

     const filterResultsByPrice = (price) =>{
        return results.filter(result=>{
            return result.price===price;
        })
    }
    
    
return(
    <>
    <Searchbar term={term} 
    onTermChange={setTerm} 
    onTermSubmit={()=>searchApi(term)} />
    {errorMessage?<Text>{errorMessage}</Text>:null} 
    <ScrollView>
    <ResultsList results ={filterResultsByPrice('$')} title="Cost Effective"/>
    <ResultsList results ={filterResultsByPrice('$$')} title="Bit Pricier"/>
    <ResultsList results ={filterResultsByPrice('$$$')} title="Big Spender"/>
    </ScrollView>
    </>
)

const styles=StyleSheet.create({  

});
}

export default SearchScreen;