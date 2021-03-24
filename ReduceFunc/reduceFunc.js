

const fakeReduce = (arr, callback) => { 
    let empObj = {};
    for(let i = 0; i < arr.length; i++) { 

        empObj = callback(empObj, arr[i]);
        
    }
    return empObj;
}

module.exports = fakeReduce;
