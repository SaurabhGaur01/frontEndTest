import React from 'react';
import Header from './Content/Header';
import Content from './Content/Content';
import makeRequest from '../utils/makeRequest';
import { transformStrings } from '../utils/index';

const FrontEndTest = () => {
    const [listOfCities, updateList] = React.useState({});
    const [selectedCity, setSelectedCity] = React.useState('');
    
    // function to input search box - change event
    const onCityChange = event => {
        const inputCity = event.target.value;
        setSelectedCity(inputCity);
        updateList({});
        if(inputCity.length > 1){
            // make API call to get city list
            makeRequest(event.target.value).then(({ results }) => {
                updateList(results);
            });
        }
    }

    // function to select city from dropdown
    const getSelectedCity = ({ bookingId, name, city, country }) => {
        if(bookingId) {
            setSelectedCity(transformStrings(name, city, country));
            updateList({});
        }
    }

    return (
        <div className="app">
            <Header />
            <Content 
                onCityChange={onCityChange}
                getSelectedCity={getSelectedCity}
                listOfCities={listOfCities}
                selectedCity={selectedCity}
            />
        </div>
    );
}

export default FrontEndTest;
