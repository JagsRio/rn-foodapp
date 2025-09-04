import react, { useState } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errMsg, setErrMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params:{
                    limit: 25,
                    term : term,
                    location: 'fullerton',
                }
            });
            setResults(response.data.businesses);   
        } catch (error) {
            setErrMessage("Something went wrong");
        }
    }

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={ (newTerm)=> setTerm(newTerm) }
                onTermSubmit={ ()=> searchApi() }
            />
            
            return {errMsg.length > 0}
            ? <Text>{errMsg}</Text>
            : null

            <Text>Search found = {results.length} results </Text>
        </View>
    )
}

export default SearchScreen;