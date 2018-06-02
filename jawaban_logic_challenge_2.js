// Logic Challenge - Palindrome
function palindrome(kata) {
  // you can only write your code here!
  
  var kataTerbalik = '';
  
  for (var i = kata.length -1; i >= 0; i--){
    
    kataTerbalik += kata[i];
    
  }
  
  if ((kataTerbalik) === kata){
    return true;
  } else{
    return false;
  }  
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

// Logic Challenge - Number Palindrome
function angkaPalindrome(num) {
  for (var i = 0; i < num; i++){
      num++
     
      var numString = String(num);
      var len = numString.length;
      var string = '';
      for (var j = len - 1; j >= 0; j--){
        string += numString[j];
       
      }
      if(numString === string){
        return num
      }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


// Logic Challenge - Menghitung Jumlah Kata
function hitungJumlahKata(kalimat) {
   return kalimat.split(' ').length;
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5


// Logic Challenge - Pasangan Angka Terbesar
function pasanganTerbesar(num) {
  var str = String(num);
  var angka;
  var banding = 0;
  for (var i = 0; i < str.length; i++){
    angka = Number(str[i] + str[i+1]);
    if (angka > banding){
      banding = angka
    }
  }
  return banding
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99