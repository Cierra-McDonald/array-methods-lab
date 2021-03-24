const fakeFilter = require('./filterFunc')

describe('make a filter', () => { 
    it('function takes an array and callback and creates new array with all items returned "true" or "truthy" ', () => { 
        const filterOZodiacs = ['libra', 'scorpio', 'virgo', 'taurus', 'cancer', 'capricorn']

        const result = fakeFilter(filterOZodiacs, (zodiac) => zodiac.includes('o'));

        expect(result).toEqual(['scorpio', 'virgo', 'capricorn']);
    });
});

