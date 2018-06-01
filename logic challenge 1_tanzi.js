//logic 1

//Logic Challenge - Bandingkan Angka
function bandingkan(a1,a2) {
    if (a1<a2){
     return true;
    }else if(a1==a2){
      return -1;
    }else{
      return false;
    }
  }
console.log(bandingkan(5, 8)); // true
console.log(bandingkan(5, 3)); // false
console.log(bandingkan(4, 4)); // -1
console.log(bandingkan(3, 3)); // -1
console.log(bandingkan(17, 2)); // false

//Logic Challenge - Balik Kata
function balikkata(kata) {
    balik=kata.split('').reverse().join('');
    return balik
          }
		 		  
console.log(balikkata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikkata('John Doe')); // sredoC dna dlroW olleH
console.log(balikkata('I am a bookworm')); // sredoC dna dlroW olleH
console.log(balikkata('Coding is my hobby')); // sredoC dna dlroW olleH
console.log(balikkata('Super')); // sredoC dna dlroW olleH

//Logic Challenge - Konversi Menit
function konversiMenit(menit) {
  menit1=menit/60;
  menit2=menit1.toFixed(0);
  detik=menit%60;
    return menit2+" : "+detik
          }
		 		  
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

//Logic Challenge - X dan O
function XO(str){
  var str = str.toLowerCase();
  var x = 0;
  var o = 0;
  
  for(var i = 0; i< str.length; i++){
    if(str[i] === 'x'){
      x += 1;
    }
    else if(str[i] === 'o'){
      o += 1;
    }
  }
  if(x === o){
    return true;
  }
  return false;
}

console.log(XO('xoxoxo')); // true
console.log(XO('oxooxo')); // false
console.log(XO('oxo')); // false
console.log(XO('xxxooo')); // true
console.log(XO('xoxooxxo')); // true
