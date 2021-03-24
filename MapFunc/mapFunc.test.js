const fakeMap = require('./mapFunc')


describe('make a map', () => { 
    it('function takes in an array and callback function and creates a new array with return value of each called callback', () => {
        
        const capitalizeZodiacs = ['libra', 'scorpio', 'virgo', 'taurus', 'cancer', 'capricorn']
        const result = fakeMap(capitalizeZodiacs, (zodiac) => zodiac.toUpperCase());

        expect(result).toEqual(['LIBRA', 'SCORPIO', 'VIRGO', 'TAURUS', 'CANCER', 'CAPRICORN']);

    });
});