//input array
var arr = [2,2,2,2,4,4,4,4];

console.log(`[${max(arr)}, ${min(arr)}]`); //calling max and min fuction for the values


function min(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};       //map to store key value pairs
    var minEl = array[0], minCount = 1;    //intialization
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)           //1st time occurance
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] < minCount)       //find min
        {
            minEl = el;
            minCount = modeMap[el];
        }
    }
    return minEl;
}

function max(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};     //map to store key value pairs
    var maxEl = array[0], maxCount = 1;   //intialization
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)       //1st time occurance
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)    //find max
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
