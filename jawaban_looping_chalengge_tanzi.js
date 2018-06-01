//while
//no 1
var a = 2;
var b = 20;
console.log("looping pertama");
while(a <= 20) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log(a +" - i love coding"); // Menampilkan nilai flag pada iterasi tertentu
  a +=2; // Mengubah nilai flag dengan menambahkan 1 
}

console.log("looping kedua");
while(b >= 2) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log(b +" - I will become  developer"); // Menampilkan nilai flag pada iterasi tertentu
  b -=2; // Mengubah nilai flag dengan menambahkan 1 
}

//for
//no 2
console.log("looping pertama")
for(var angka = 1; angka <= 20; angka++) {
    console.log( angka + " - i love coding")
}

console.log("looping kedua")
for(var angka = 20 ; angka >= 13; angka--) {
    console.log( angka + " - i will become developer")
}

//tugas no 3
for(var angka = 1; angka <= 100; angka++) {
  hasil=angka % 2;
    if (hasil==0){
      console.log("genap");
    }else {
      console.log("ganjil")
    }
}
console.log("--------------------------------------------");
for(var angka = 1; angka <= 100; angka+=2) {
  hasil=angka % 3;
    if (hasil==0){
      console.log(angka+" kelipatan 3");
    }else {
      console.log(" ");
    }
}
console.log("--------------------------------------------");
for(var angka = 1; angka <= 100; angka+=5) {
  hasil=angka % 6;
    if (hasil==0){
      console.log(angka+" kelipatan 6");
    }else {
      console.log(" ");
    }
}
console.log("--------------------------------------------");
for(var angka = 1; angka <= 100; angka+=9) {
  hasil=angka % 10;
    if (hasil==0){
      console.log(angka+" kelipatan 10");
    }else {
      console.log(" ");
    }
}


//looping bintang
for(var a = 1; a <= 5; a++) {
  console.log("*");
}
console.log("--------------------------------------------");
for (var a = 1; a <= 5; a++) {
for (var b = 1; b <= 5; b++) {

console.log("*");}
console.log(" ");}
console.log("--------------------------------------------");
for (var i=1;i<=5;i++){
        for (var j=1;j<=i;j++){
            console.log("*");
        }
        console.log(" "); 
    }

