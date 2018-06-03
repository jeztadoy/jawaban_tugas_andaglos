//Logic Challenge - Change Me!
function changeMe(arr) {
    if (arr.length <1){
      console.log('tidak ada data')
  } else {
      for (let a = 0; a < arr.length; a++) {
          let c = {};
          let age = 2018 - arr[a][arr[a].length -1];
          c.firstName = arr[a][0];
          c.lastName = arr[a][1];
          c.gender = arr[a][2];
          if (!age || 2018 < arr[a][arr[a].length - 1]) {
              c.age = 'Invalid Birth Year';
          } else {
              c.age = age;
            }
        let tampil = (a+1) + "." + " " + arr[a][0] + " " + arr[a][1] + ":"
        console.log(tampil);
        console.log(c);
      }
  }
}
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""



//Logic Challenge - Shopping Time!
function shoppingTime(memberId, money) {
  let sisa = money;
  let chart = [];
  for(let  i=0; i<5; i++){
    if(sisa >= 1500000){
      chart.push('Sepatu Stacattu');
      sisa -= 1500000;
    } else if(sisa >= 500000){
      chart.push('Baju Zoro');
      sisa -= 500000;
    } else if(sisa >= 250000){
      chart.push('Baju H&N');
      sisa -= 250000;
    } else if(sisa >= 175000){
      chart.push('Sweater Uniklooh');
      sisa -= 175000;
    } else if(sisa >= 50000){
      chart.push('CasingHandphone');
      sisa -= 50000;
      break;
    }
  }
  let objProduct = {};
  objProduct.memberId = memberId;
  objProduct.money = money;
  objProduct.listPurchased = chart;
  objProduct.changeMoney = sisa;
    if(memberId === '' || memberId === undefined && money === undefined){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if(money < 50000){
    return 'Mohon maaf, uang tidak cukup';
  }
  return objProduct;
}
 console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja




//Logic Challenge - Toko X
function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  var newArray = []; 
  var stokSepatu = listBarang[0][2];
  var stokZoro = listBarang[1][2];
  var stokUniklooh = listBarang[2][2];
  var pembeliSepatu = [];
  var pembeliZoro = [];
  var pembeliUniklooh = [];
    for(var i=0; i<shoppers.length; i++){
    if(shoppers[i].product === 'Sepatu Stacattu'){
      if(stokSepatu >= shoppers[i].amount){ // jika stok masih ada, maka bisa dijual
        pembeliSepatu.push(shoppers[i].name);
        stokSepatu -= shoppers[i].amount;
      }
    } else if(shoppers[i].product === 'Baju Zoro'){
      if(stokZoro >= shoppers[i].amount){
        pembeliZoro.push(shoppers[i].name);
        stokZoro -= shoppers[i].amount;
      }
    } else if(shoppers[i].product === 'Sweater Uniklooh'){
      if(stokUniklooh >= shoppers[i].amount){
        pembeliUniklooh.push(shoppers[i].name);
        stokUniklooh -= shoppers[i].amount;
      }
    }
  }
  var pembeli;
  var sisa;
   for(var l=0; l<listBarang.length; l++){
    if(listBarang[l][0] === 'Sepatu Stacattu'){
      pembeli = pembeliSepatu;
      sisa = stokSepatu;
      totProfit = (listBarang[l][2]- stokSepatu) * listBarang[l][1];
    } else if(listBarang[l][0] === 'Baju Zoro'){
      pembeli = pembeliZoro;
      sisa = stokZoro;
      totProfit = (listBarang[l][2] - stokZoro) * listBarang[l][1];
    } else if(listBarang[l][0] === 'Sweater Uniklooh'){
      pembeli = pembeliUniklooh;
      sisa = stokUniklooh;
      totProfit = (listBarang[l][2] - stokUniklooh) * listBarang[l][1];
    }
    
    var objectProduct = {};
    objectProduct.product = listBarang[l][0];
    objectProduct.shoppers = pembeli;
    objectProduct.leftOver = sisa;
    objectProduct.totalProfit = totProfit;
    newArray.push(objectProduct);
  }
  return newArray;
 }

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
{name: 'Devi', product: 'Baju Zoro', amount: 1}, 
{name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
