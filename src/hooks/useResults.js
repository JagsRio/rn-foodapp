import { useEffect, useState } from "react";  
import yelp from "../api/yelp";

export default () => {

    const [results, setResults] = useState([]);
    const [errMsg, setErrMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params:{
                    limit: 50,
                    term : searchTerm,
                    location: 'new york',
                }
            });
            setResults(response.data.businesses);   
        } catch (error) {
            setErrMessage("Something went wrong");
        }
    }

    useEffect(()=>{
        searchApi('american')
    }, [])

    console.log(results.length);

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }
    
    const dollarOne = filterResultByPrice('$');
    const dollarTwo = filterResultByPrice('$$');
    const dollarThree = filterResultByPrice('$$$');
    
    return [searchApi, dollarOne, dollarTwo, dollarThree, errMsg];
}