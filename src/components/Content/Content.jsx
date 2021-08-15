import React from 'react';
import PropTypes from 'prop-types';
import ListOfCities from './ListOfCities';

const Content = ({ 
    onCityChange, 
    selectedCity, 
    listOfCities, 
    getSelectedCity 
}) => (
    <div className="section">
        <div className="search-bar">
            <div className="search-bar__background p-1">
                <div className="searchbox">
                    <input type="search" id="pickup-location" className="form-control textBox" placeholder="Pickup Location"
                        aria-label="Search" onChange={onCityChange} value={selectedCity} />
                    {
                        Object.entries(listOfCities).length > 0 && (
                            <div className="card searchbox__suggestions">
                                <ul className="searchbox__listing pt-2">
                                    {
                                        Object.keys(listOfCities).map((item, index) => {
                                            return (
                                                <ListOfCities 
                                                    key={index} 
                                                    listOfCities={listOfCities} 
                                                    keyFields={item} 
                                                    getSelectedCity={getSelectedCity}
                                                />
                                            )
                                        })
                                    }
                                </ul>
                            </div>   
                        )
                    } 
                </div>
            </div>
        </div>
        <div className="backSection" />
    </div>
);

Content.propTypes = {
    onCityChange: PropTypes.func.isRequired,
    selectedCity: PropTypes.string.isRequired,
    getSelectedCity: PropTypes.func.isRequired,
    listOfCities: PropTypes.shape({}).isRequired,
}

export default Content;