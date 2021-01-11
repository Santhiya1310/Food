import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ResultsDetail = ({result}) => {
    console.log(result)
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars {result.review_count} Reviews</Text>
        </View>
        )
}
const styles = StyleSheet.create({
image:{
    height:150,
    width:300,
    marginTop:10,
    marginBottom:10
},
container:{
    marginLeft:15,
    marginBottom:10
},
name:{
    fontSize:16,
    fontWeight:"bold"
}
});

export default ResultsDetail;