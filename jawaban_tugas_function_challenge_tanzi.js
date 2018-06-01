function shoutOut() {
  console.log("Halo Function!");
}

shoutOut();

console.log('---------------------------------');

function calculateMultiply(num1,num2) {
  return num1*num2
}
var hasilPerkalian = calculateMultiply(5,6);
console.log(hasilPerkalian)

console.log('---------------------------------');

function processSentence(name = "Agus", age = 30, address = "Jln. Malioboro, Yogjakarta", hobby = "gaming") {
  return console.log("Nama saya " +name+", umur saya "+age+" tahun, alamat saya di "+address+". Hobi saya "+hobby);
}

console.log(processSentence())