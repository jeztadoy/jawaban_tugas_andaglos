// Logic Challenge - Target Terdekat
function TargetTerdekat(arr) {
  var x1 = 0;
  var x2 = 0;
  var hitung = 0;
  var arrxo = [];
  
  if(arr.indexOf('x') === -1){
    return 0
  }else{
    for (var a = 0; a < arr.length; a++){
      if (arr[a] === 'x'){
      x1 = a
      arrxo.push(x1)
      }else if (arr[a] === 'o'){
       x2 = a
      }
       var TarTer= [];
      for (var b = 0; b < arrxo.length; b++){
      hitung = Math.abs(x2 - arrxo[b]);
    TarTer.push(hitung)
      TarTer.sort()
      }
    }
      return TarTer[0]
  }
  }
console.log(TargetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(TargetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(TargetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(TargetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(TargetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


//Logic Challenge - Mengelompokkan Angka
function mengelompokkanAngka(arr) {
  let c=[];
  for(let d=0;d<3;d++){
    c.push([]);
  }
    for(let e = 0; e < arr.length; e++){
      if(arr[e] %3===0){
        c[2].push(arr[e]);
     } else if(arr[e]%2!==0){
        c[1].push(arr[e]);
      }
      else if(arr[e]%2===0){
        c[0].push(arr[e]);
      } }
    return c;
    }
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]


//Logic Challenge - Mengelompokkan Hewan
function groupAnimals(animals) {
 	let f= animals.sort();
	let g= animals[0][0];
	let z=[];
	let y=[];
	
    for(let j=0;j<f.length;j++){
      if(f[j][0] == g){
        y.push(f[j]);
             } else {
        z.push(y);
        y=[];
        g=f[j][0];
        y.push(f[j]);
      }}
    z.push(y);
     return z;
 }
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'