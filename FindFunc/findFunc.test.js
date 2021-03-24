const fakeFind = require('./findFunc')

describe('make a find function', () => { 
    it('function taks an array and callback and returns the index of the first item whose callback returns true or truthy value', () => { 
        const findAZodiac = ['libra', 'scorpio', 'virgo', 'taurus', 'cancer', 'capricorn']

        const result = fakeFind(findAZodiac, (zodiac) => zodiac.includes('can'));

        expect(result).toEqual(4);

    });
});