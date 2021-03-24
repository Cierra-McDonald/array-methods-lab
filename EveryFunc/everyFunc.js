
const fakeEvery = (arr, callback) => { 
    for (let i = 0; i < arr.length; i++) { 
        arr[i] = callback(arr[i]);
        if ( arr[i] === false ) { 
             return false;
        }  
    }
    return true;
}

module.exports = fakeEvery;
