

const fakeMap = (arr, callback) => { 

    for (let i = 0; i < arr.length; i++) { 
        let cap = callback(arr[i]);
        arr[i] = cap;
    }
 
    return arr;
   
}

module.exports = fakeMap;

