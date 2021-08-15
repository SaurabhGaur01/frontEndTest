const MAX_RESULTS = 6;

const BASE_URL = 'https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en';

const makeRequest = async (searchTerm) => {
    try {
        const response = await fetch(BASE_URL+'&solrRows='+MAX_RESULTS+'&solrTerm='+searchTerm);
        const content = await response.json();
        return content;
    } catch(e) {
        // this block can be used to handle errors gracefully - can return any flag or use any redux store to update
        return null;
    }
}

export default makeRequest;