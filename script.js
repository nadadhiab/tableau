function insertionSort(arr) {
    
    for (var  i = 1; i < arr.length; i++) {
        var  key = arr[i];  
        var j = i - 1;  

        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }

        
        arr[j + 1] = key;
    }
    return arr;  
}


var  arr = [12, 11, 13, 5, 6];
console.log("Tableau original: ", arr);
arr = insertionSort(arr);
console.log("Tableau trié: ", arr);
