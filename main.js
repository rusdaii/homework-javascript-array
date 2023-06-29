// Function array dengan 100 index 
function arrRandomNumber(length) {
    const arrNumber = [];
    for (let i = 0; i <= length; i++) {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        arrNumber.push(randomNumber);
    }
    return arrNumber;
}

// Function Memecah Array Menjadi 2
function arrSplit(array) {
    const arrEven = [];
    const arrOdd = [];
    for (let i in array) {
        if ([i] % 2 === 0) {
            arrEven.push(array[i])
        } else {
            arrOdd.push(array[i])
        }
    }
    return [arrEven, arrOdd]
}

// Function mencari nilai minimum
function arrMin(array) {
    let min = array[0];
    for (let i in array) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Function mencari nilai maximum 
function arrMax(array) {
    let max = array[0];
    for (let i in array) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Function mencari nilai total
function arrTotal(array) {
    let total = 0;
    for (let i in array) {
        total += array[i];
    }
    return total;
}

// Function mencari nilai rata rata
function arrAvg(array) {
    const total = arrTotal(array);
    const average = total / array.length;
    return average;
}

// Function mendapatkan komparasi
function arrCompare(array1, array2) {
    const min1 = arrMin(array1)
    const min2 = arrMin(array2)
    const max1 = arrMax(array1)
    const max2 = arrMax(array2)
    const total1 = arrTotal(array1)
    const total2 = arrTotal(array2)
    const average1 = arrAvg(array1)
    const average2 = arrAvg(array2)

    console.log("\nKomparasi:")
    if (min1 < min2) {
        console.log("Minimum Array Ganjil lebih besar dari Minimum Array Genap")
    } else if (min1 > min2) {
        console.log("Minimum Array Genap lebih besar dari Minimum Array Ganjil")
    } else {
        console.log("Minimum Array Genap memiliki nilai yang sama dengan Minimum Array Ganjil")
    }

    if (max1 < max2) {
        console.log("Maximum Array Ganjil lebih besar dari Maximum Array Genap")
    } else if (max1 > max2) {
        console.log("Maximum Array Genap lebih besar dari Maximum Array Ganjil")
    } else {
        console.log("Maximum Array Genap memiliki nilai yang sama dengan Maximum Array Ganjil")
    }

    if (total1 < total2) {
        console.log("Total Array Ganjil lebih besar dari Total Array Genap")
    } else if (total1 > total2) {
        console.log("Total Array Genap lebih besar dari Total Array Ganjil")
    } else {
        console.log("Total Array Genap memiliki nilai yang sama dengan Total Array Ganjil")
    }

    if (average1 < average2) {
        console.log("Rata rata Array Ganjil lebih besar dari Rata rata Array Genap")
    } else if (average1 > average2) {
        console.log("Rata rata Array Genap lebih besar dari Rata rata Array Ganjil")
    } else {
        console.log("Rata rata Array Genap memiliki nilai yang sama dengan Rata rata Array Ganjil")
    }
}


const randomNumberArray = arrRandomNumber(99); //Variabel yang berisi fungsi dari angka random berjumlah 100
const [arrEven, arrOdd] = arrSplit(randomNumberArray); //Variabel yang berisi fungsi dari angka random untuk di pecah menjadi 2 berdasarkan index genap & ganjil

console.log("Array Angka Random:", randomNumberArray);
console.log("Index Array Genap:", arrEven);
console.log("Index Array Ganjil:", arrOdd);
console.log("\nPanjang Array:", randomNumberArray.length);
console.log("Panjang array genap:", arrEven.length);
console.log("Panjang array ganjil:", arrOdd.length);
console.log("")
console.log("Minimum Pada Array Genap:", arrMin(arrEven))
console.log("Maximum Pada Array Genap:", arrMax(arrEven))
console.log("Total Pada Array Genap:", arrTotal(arrEven))
console.log("Rata rata Pada Array Genap:", arrAvg(arrEven))
console.log("")
console.log("Minimum Pada Array Ganjil:", arrMin(arrOdd))
console.log("Maximum Pada Array Ganjil:", arrMax(arrOdd))
console.log("Total Pada Array Ganjil:", arrTotal(arrOdd))
console.log("Rata rata Pada Array Ganjil:", arrAvg(arrOdd))

arrCompare(arrEven, arrOdd)



