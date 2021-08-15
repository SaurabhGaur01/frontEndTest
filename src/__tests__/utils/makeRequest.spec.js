import makeRequest from '../../utils/makeRequest';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ mockKey: 'mockValue' }),
  })
);

describe('makeRequest function Test', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it('should call the API when recieve the search term', async () => {
        fetch.mockImplementationOnce(() => Promise.resolve({
            json: () => Promise.resolve({ mockKey: 'mockValue' }),
        }));
        const result = await makeRequest('br');
        expect(result).toEqual({ mockKey: 'mockValue' });
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should return null when API fails', async () => {
        fetch.mockImplementationOnce(() => Promise.reject("API is down"));
        const result = await makeRequest('br');
        expect(result).toEqual(null);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
})