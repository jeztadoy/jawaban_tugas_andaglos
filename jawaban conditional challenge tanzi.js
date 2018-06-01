//soal if-else

//soal 1
var nama = " ";
if (nama == " "){
  console.log("nama harus diisi");
}else{
  console.log("selamat datang ")
}  
//ouput "Nama harus diisi!



//soal 2
var	nama = "mikael";
var peran = "";
if(nama== " ") {
  console.log("Nama harus diisi !");
}else {
  console.log("selamat datang " + nama + ", Pilih peranmu untuk memulai game!");
}
//output "Halo Mikael, Pilih peranmu untuk memulai game!"




//soal 3
var nama = "nina";
var peran ="ksatria";

if(nama== " ") {
  console.log("Nama harus diisi !");
}else {
  console.log("Selamat datang di Dunia Proxytia," + nama);
}

if(peran== "ksatria") {
  console.log("Halo " + peran + nama + ", kamu dapat menyerang dengan senjatamu!");
}else if(peran=="tabib") {
  console.log("Halo " +peran + nama + " ,kamu akan membantu temanmu yang terluka.!");
} else if(peran=="Penyihir") {
  console.log("Halo " +peran + nama + ",ciptakan keajaiban yang membantu kemenanganmu");}
// output "Selamat datang di Dunia Proxytia, Nina"
//"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"




//soal 4
var nama = "danu";
var peran ="tabib";

if(nama== " ") {
  console.log("Nama harus diisi !");
}else {
  console.log("Selamat datang di Dunia Proxytia," + nama);
}

if(peran== "ksatria") {
  console.log("Halo " + peran + nama + ", kamu dapat menyerang dengan senjatamu!");
}else if(peran=="tabib") {
  console.log("Halo " +peran + nama + " ,kamu akan membantu temanmu yang terluka.!");
} else if(peran=="Penyihir") {
  console.log("Halo " +peran + nama + ",ciptakan keajaiban yang membantu kemenanganmu");}
//output "Selamat datang di Dunia Proxytia, Danu"
//"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."




//soal 5
var nama = "zero";
var peran ="penyihir";

if(nama== " ") {
  console.log("Nama harus diisi !");
}else {
  console.log("Selamat datang di Dunia Proxytia," + nama);
}

if(peran== "ksatria") {
  console.log("Halo " + peran + nama + ", kamu dapat menyerang dengan senjatamu!");
}else if(peran=="tabib") {
  console.log("Halo " +peran + nama + " ,kamu akan membantu temanmu yang terluka.!");
} else if(peran=="Penyihir") {
  console.log("Halo " +peran + nama + ",ciptakan keajaiban yang membantu kemenanganmu");}
//output "Selamat datang di Dunia Proxytia, Zero"
//"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"

//-------------------------------------------------------------------------------------------------------------------------------

//switch case 

//no 1
var hari = 1;
var bulan = 0;
var tahun = 1945;

switch(hari) {
  case 1:{console.log("1"); break; }
    case 2:{console.log("2"); break; }
    case 3:{console.log("3"); break; }
    case 4:{console.log("4"); break; }
    case 5:{console.log("5"); break; }
  default:  { console.log("tanggal salah masukan"); }
}


switch(bulan) {
  case 1: {console.log("jan"); break; }
    case 2: {console.log("feb"); break; }
    case 3: {console.log("mar"); break; }
    case 4: {console.log("apr"); break; }
    case 5: {console.log("mei"); break; }
  default:  { console.log("bulan salah masukan"); }
}

console.log(tahun);
