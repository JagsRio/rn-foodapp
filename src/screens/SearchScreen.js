import react, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, dollarOne, dollarTwo, dollarThree, errMsg] = useResults();

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={ (newTerm)=> setTerm(newTerm) }
                onTermSubmit={ ()=> searchApi(term) }
            />
            
            {
                errMsg.length>0
                ? <Text>{errMsg}</Text>
                : null
            }
            <ScrollView>
            <ResultsList title="Cost Effective" filteredData = {dollarOne} />
            <ResultsList title="Bit Pricier" filteredData = {dollarTwo} />
            <ResultsList title="Big Spender" filteredData = {dollarThree} />
            </ScrollView>
        </>
    )
}

export default SearchScreen;