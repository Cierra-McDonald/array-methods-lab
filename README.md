# array-methods-lab
Description
Implement a module with functions similar to array operations that exist on the built-in JavaScript array object.

Relevant info for each array function is in details below.

Implement select array functions from scratch. Only use:

array.length (read)
array.length = x (assignment)
array[i] (read)
array[i] = value (assignment)
You must use TDD and good commits for this lab

The specs for the lab are less onerous than the entire JavaScript specification for the method (for example, no third array parameter and index is a challenge goal).

The "callback signature" refers to the parameter definition of the supplied callback function.

The instructions include how to handle array "holes". This is for one of the bonus parts of the assignment.

Functions to Implement
1. map(arr, callback)
Takes an Array and callback of signature item => {} and creates a new Array with the return value of each called callback.

Skips any holes in the Array, and mapped Array should have hole in same spot. The mapped Array should have the same .length value as the original Array.

Returns the "mapped" new array.

2. filter(arr, callback)
Takes an Array and callback of signature item => {} and creates a new Array with all items whose callback returned true or a truthy value.

Any holes in the Array should be skipped (don't call the callback function, it always "fails" predicate).

Returns the new Array of "filtered" items.

3. findIndex(arr, callback)
Takes an Array and callback of signature item => {} and returns the index of the first item whose callback returns true or a truthy value.

Any holes in the Array should be skipped (don't call the callback function, it always "fails" predicate).

Returns the index of the found item, -1 if no item is found.

4. reduce(arr, callback [, initialValue])
Takes an Array and callback of signature (accumulator, item) => {} and an (optional) second initialValue parameter that is the initial value of the accumulator. After each function call, the return value is passed as the accumulator argument of the next function call.

If the second initialValue parameter is not supplied, the first function call should be the first item as the accumulator, and the second array item as the item.

Any holes in the Array should be skipped (don't call the callback function).

Returns the final accumulator value.

5. every(arr, callback)
Takes an Array and callback of signature item => {} and returns an overall true value if all callback return true or a truthy value.

Any holes in the Array should be skipped (don't call the callback function).

Returns the true if every item in the Array has returned true, otherwise false.

Rubric 10pts
Each test: 1pt (x 5 = 5pts)
Each function: 1pt (x 5 = 5pts)
