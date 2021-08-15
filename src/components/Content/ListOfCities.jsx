import React from 'react';
import PropTypes from 'prop-types';
import { transformStrings, isAirportOrCity } from '../../utils/index';

const DOCS_KEY_FIELD = 'docs';
const CITY_BOOKING = 'city';
const AIRPORT_BOOKING = 'airport';

const ListOfCities = ({ listOfCities, keyFields, getSelectedCity }) => {
    if(keyFields === DOCS_KEY_FIELD) {
        return listOfCities[keyFields].map(item => {
            const { name, index, bookingId, city, region, country } = item;
            return (
                <li className="listingItem ml-0" key={index} onClick={() =>getSelectedCity(item)}>
                    <div className="d-flex pb-3">
                        {
                            isAirportOrCity(bookingId) === CITY_BOOKING && (
                                <span className="badge bg-primary mr-3 mt-2 iconDisplay">City</span>
                            )
                        }
                        {
                            isAirportOrCity(bookingId) === AIRPORT_BOOKING && (
                                <span className="badge bg-warning mr-3 mt-2 iconDisplay">Airport</span>
                            )
                        }
                        <div className="details">
                            <p className="m-0">{name}</p>
                            <p className="m-0">{transformStrings(city, region, country)}</p>
                        </div>
                    </div>
                </li> 
            )
        });
    }

    return null;
}

ListOfCities.propTypes = {
    keyFields: PropTypes.string.isRequired,
    getSelectedCity: PropTypes.func.isRequired,
    listOfCities: PropTypes.shape({
        docs: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string, 
            index: PropTypes.number, 
            bookingId: PropTypes.string,
            city: PropTypes.string,
            region: PropTypes.string,
            country: PropTypes.string, 
        })),
    }).isRequired,
}

export default ListOfCities;