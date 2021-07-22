var words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

var found = [];


for(var i = 0; i < words.length; i++) {
    found.push(selectionSort(words[i]));
}


var anagram = [
    [],
    [],
    [],
    [],
];


for(var j = 0; j < found.length; j++){
    if(found[j].length === 4) {
        anagram[0].push(found[j]);
    } else if(found[j].length === 3 && j !== 6) {
        anagram[1].push(found[j]);
    }else if(found[j].length === 5) {
        anagram[2].push(found[j]);
    }else {
        anagram[3].push(found[j]);
    }
}


function selectionSort(arr) { 
    for(let n = 0; n < arr.length; n++) {
        let min = n;

        for(let j = n+1; j < arr.length; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
        }

        if (min !== n) {
            let current = arr[n]; 
            arr[n] = arr[min];
            arr[min] = current;      
        }
    }

    return arr;
}


console.log(anagram);

 

