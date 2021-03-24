
const fakeFind = (arr, callback) => { 

    for (let i = 0; i < arr.length; i++) { 
        arr[i] = callback(arr[i]);

        if( arr[i] === true) { 
            return i;
        }
    }
    return arr;
}

module.exports = fakeFind;
