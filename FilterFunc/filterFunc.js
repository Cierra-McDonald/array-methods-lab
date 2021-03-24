
const fakeFilter = (arr, callback) => {
    let empArr = [];
    for( let i = 0; i < arr.length; i++) { 
        let addToArray = callback(arr[i]);

        if (addToArray === true) { 
            empArr[empArr.length] = arr[i];   
        } 
    }
    return empArr;
}

module.exports = fakeFilter;
