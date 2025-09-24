import React, { useEffect, useState } from "react";  
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import yelp from "../api/yelp";

const DetailsScreen = ( {route} ) =>{
    const id = route.params.id;
    const [result, setResult] = useState(null);

    const getResult = async (id) =>{
        const respone = await yelp.get(`/${id}`);
        setResult(respone.data);
    }

    useEffect(()=>{
        getResult(id);
    }, [])

    if (!result){
        return null;
    }

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.nameStyle}>Details Screen - {result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={ ( { item} ) =>{
                    return <Image style={styles.imgStyle} source={ { uri:item } } />
                } }
            />
            <Text>Details Screen - {result.display_phone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        marginLeft:15, marginRight:15,marginBottom:15,
        marginHorizontal:12,
        marginVertical:5,
    },
    nameStyle:{
        fontSize:20, fontWeight:'bold',
        marginVertical:5,
    },
    bodyStyle:{
        fontSize:14,
    },
    imgStyle: {
        height:120,
        width:180,
        borderRadius:10,
        marginVertical:5,
    }
});

export default DetailsScreen;