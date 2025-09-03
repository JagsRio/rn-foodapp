import react, { useState } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ( {term, onTermChange, onTermSubmit} ) => {

    return(
        <View style={styles.searchBGStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput style={styles.txtBoxStyle}
                placeholder='Search'
                autoCapitalize='none'
                autoCorrect={false}
                value={term}
                onChangeText={(newTerm) => {
                    onTermChange(newTerm)
                }}
                onEndEditing={()=> {
                    onTermChange('')
                    onTermSubmit()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBGStyle: {
        backgroundColor:'#D8D9D7',
        height:50,
        borderRadius:6,
        marginHorizontal:12,
        marginVertical:10,
        flexDirection:'row',
        padding:0,
    },
    txtBoxStyle : {
        marginLeft:0,
        borderWidth:0,
        flex:1,
        alignItems:'baseline',
        fontSize:18,
    },
    iconStyle : {
        fontSize:36,
        alignSelf:'center',
        marginHorizontal:8,
    }
});

export default SearchBar;