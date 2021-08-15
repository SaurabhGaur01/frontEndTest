import React from 'react';
import { shallow } from 'enzyme';
import ListOfCities from '../../components/Content/ListOfCities';

describe('ListOfCities', () => {
    let props;

    beforeEach(() =>{
        props = {
            getSelectedCity: jest.fn(),
            listOfCities: {
                docs: [{
                    name: 'mockName',
                    index: 1,
                    bookingId: 'city-123',
                    city: 'mockCity',
                    region: 'mockRegion',
                    country: 'mockCountry',
                }],
            },
            keyFields: 'docs',
        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<ListOfCities  {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render correctly when keyFields is not docs', () => {
        props.keyFields = 'xyz';
        const renderedModule = shallow(<ListOfCities  {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });
})