import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Content/Header';

describe('Header', () => {
    it('should render correctly', () => {
        const renderedModule = shallow(<Header />);
        expect(renderedModule).toMatchSnapshot();
    });
})