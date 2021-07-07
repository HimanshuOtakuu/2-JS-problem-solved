//input array
var arr = [1,2,2,4,4,4,4,5];
var modeMap = {}; 

for(var i = 0; i < arr.length; i++)  //creating and object to keep track of the occurances
{
    var el = arr[i];
    if(modeMap[el] == null)       
        modeMap[el] = 1;
    else
        modeMap[el]++;  
}

console.log(`[${max(arr)}, ${min(arr)}]`); //calling max and min fuction for the values

//minimum fuction
function min(array)
{
    if(array.length == 0)              //if array is empty return 0
        return null;

    var minEl = array[0], minCount = Infinity; 

    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] < minCount)       //finding the least frequent element
        {
            minEl = el;
            minCount = modeMap[el];
        }
    }

    return minEl;
}

//maximum function
function max(array)
{
    if(array.length == 0)    //if array is empty return 0
        return null;
        
    var maxEl = array[0], maxCount = 1;   

    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] >  maxCount)       //finding the most frequent element
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
