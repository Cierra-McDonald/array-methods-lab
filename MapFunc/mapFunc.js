
const fakeMap = (arr, callback) => { 

    for (let i = 0; i < arr.length; i++) { 
        arr[i] = callback(arr[i]);
    }
 
    return arr;
}

module.exports = fakeMap;

