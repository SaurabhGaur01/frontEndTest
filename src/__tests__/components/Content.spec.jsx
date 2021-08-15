import React from 'react';
import { shallow } from 'enzyme';
import Content from '../../components/Content/Content';

describe('Content', () => {
    let props;

    beforeEach(() =>{
        props = {
            onCityChange: jest.fn(),
            getSelectedCity: jest.fn(),
            listOfCities: {
                mockKey: 'mockValue',
            },
            selectedCity: 'mockCity',

        }
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<Content  {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render correctly when listOfCities is empty', () => {
        props.listOfCities = {};
        const renderedModule = shallow(<Content  {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call onCityChange when input changes', () => {
        const renderedModule = shallow(<Content  {...props} />);
        renderedModule.find('#pickup-location').at(0).simulate('change', {target: { value: 'mockValue'}});
        expect(props.onCityChange).toHaveBeenCalledTimes(1);
    });
})