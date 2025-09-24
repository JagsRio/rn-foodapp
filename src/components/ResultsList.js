import react from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SingleResult from './SingleResult';

const ResultsList = ( {title, filteredData} ) => {

    if (!filteredData.length){
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal={true}
                data = {filteredData}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result)=>result.id}
                renderItem={ ( {item} ) => {
                    return (
                        <View>
                            <SingleResult result={item}/>
                        </View>
                    );
                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
    }
});

export default ResultsList;