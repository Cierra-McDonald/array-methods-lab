

const fakeReduce = (arr, callback, initialValue) => { 
    
    let accumulator;
    if (initialValue) { 
        accumulator = initialValue
        for(let i = 0; i < arr.length; i++) { 
    
             accumulator = callback(accumulator, arr[i]);
            
        }
    } else { 

        accumulator = arr[0];
        for(let i = 1; i < arr.length; i++) { 
            accumulator = callback(accumulator, arr[i]);
        }
    }
    return accumulator;
}

module.exports = fakeReduce;
