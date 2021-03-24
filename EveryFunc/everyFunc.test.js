const fakeEvery = require('./everyFunc')

describe('make an every function', () => { 
    it('takes an array and callback and returns an overall true value if all callback return true or truthy value', () => { 

        const allZodiacs = [
            'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn'
        ];

        const isItAZodiac = ['aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo'];

        const notAllZodiacs = ['aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'september', 'august'];

        const result =  fakeEvery(isItAZodiac, (zodiac) => allZodiacs.includes(zodiac));

        expect(result).toEqual(true);

        const result2 = fakeEvery(notAllZodiacs, (zodiac) => allZodiacs.includes(zodiac));

        expect(result2).toEqual(false);

    });

    
});