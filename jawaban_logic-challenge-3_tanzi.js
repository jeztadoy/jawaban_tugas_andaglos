// Logic Challenge - Mencari Mean
function cariMean(arr) {
  var hasil = 0;
  for(var i = 0; i < arr.length; i ++) {
  // rumus mean jumlah seluruh data dibagi banyaknya data
  hasil += arr[i];
  }
  return Math.round(hasil/arr.length);
}

console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

// Logic Challenge - Perkalian Unik
function perkalianUnik(arr) {
  var hasil = [];
  for(var x = 0; x < arr.length; x++) {
    var angka = 1;
    for(var y = 0; y < arr.length; y++) {
    if(y !== x) {
      angka *= arr[y];
    }  
    }
    hasil.push(angka);
  }
  return hasil;
}

console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

// Logic Challenge - Tentukan Deret Aritmatika
function tentukanDeretAritmatika(arr) {
  var selisihDeret = arr[1] - arr[0];
  var isDeretAritmatika = true;
  //console.log(selisihDeret);
  for(var i = 1; i < arr.length -1; i++) {
    //console.log(arr[i+1]-arr[i]);
    var selisihSementara = arr[i+1]-arr[i];
    if(selisihSementara !== selisihDeret) {
      isDeretAritmatika = false;
    }
  }
  return isDeretAritmatika;
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

// Logic Challenge - Tentukan Deret Geometri
function tentukanDeretGeometri(arr) {
  var hasilBagiDeret = arr[1] / arr[0];
  var isDeretGeometri = true;
  //console.log(selisihDeret);
  for(var i = 1; i < arr.length -1; i++) {
    //console.log(arr[i+1]-arr[i]);
    var bagiSementara = arr[i+1]/arr[i];
    if(bagiSementara !== hasilBagiDeret) {
      isDeretGeometri = false;
    }
  }
  return isDeretGeometri;
}
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

