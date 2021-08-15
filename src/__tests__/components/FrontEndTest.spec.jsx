import React from 'react';
import { shallow } from 'enzyme';
import FrontEndTest from '../../components/FrontEndTest';

describe('FrontEndTest', () => {
    it('should render correctly', () => {
        const renderedModule = shallow(<FrontEndTest />);
        expect(renderedModule).toMatchSnapshot();
    });
})