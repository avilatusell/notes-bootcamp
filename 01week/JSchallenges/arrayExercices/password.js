/**
 * Created by ignasi on 07/07/16.
 */
function numer(algo){
    var count = 0;
    var bContains2Digits = false;
    for (var i = 0; i < algo.length; i++) {
        if(parseInt(algo[i]) === 'number') {
            count += 1;
            if (count === 2){
                bContains2Digits = true;
            }
        }
    }
    return bContains2Digits;
}

console.log(numer(134))