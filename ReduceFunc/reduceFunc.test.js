const fakeReduce = require('./reduceFunc')

describe('make a reduce', () => { 
    it('takes an array and callback and an optional second initialValue param, return value is passed as the accumulator argument of the next function call', () => { 
        
        const repeatZodiacs = ['aquarius', 'leo', 'aries', 'taurus', 'libra', 'cancer', 'leo', 'virgo', 'libra', 'leo', 'aries', 'aries', 'aries'];

        const result = fakeReduce(repeatZodiacs, (accumulator, item) => {
            if (item in accumulator) { 
            accumulator[item]++
        } else {
            accumulator[item] = 1
        }
        return accumulator
        }, {});

        expect(result).toEqual({'aquarius': 1, 'leo': 3, 'aries': 4, 'taurus': 1, 'libra': 2, 'virgo': 1, 'cancer': 1 })


    });
});