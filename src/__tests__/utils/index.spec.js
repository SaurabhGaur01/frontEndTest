import { transformStrings, isAirportOrCity } from '../../utils/index';

describe('Utility function Test', () => {
    it('should return concatenated strings by comma when called', () => {
        expect(transformStrings('mockValueOne', 'mockValueTwo', 'mockValueThree'))
        .toEqual('mockValueOne, mockValueTwo, mockValueThree');
    });

    it('should return only concatenated strings by comma which are present', () => {
        expect(transformStrings('mockValueOne', '', 'mockValueThree'))
        .toEqual('mockValueOne,  mockValueThree');
    });

    it('should return city when the given booking id contains city as substring', () => {
        expect(isAirportOrCity('city-123456')).toEqual('city');
    });

    it('should return airport when the given booking id contains airport as substring', () => {
        expect(isAirportOrCity('airport-123456')).toEqual('airport');
    });
})