import react from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const ResultsList = ( {title, filteredData} ) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>{filteredData.length}</Text>
            <FlatList 
                horizontal={true}
                data = {filteredData}
                keyExtractor={(result)=>result.id}
                renderItem={ ( {item} ) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize:20,
        fontWeight:'bold'
    }
});

export default ResultsList;