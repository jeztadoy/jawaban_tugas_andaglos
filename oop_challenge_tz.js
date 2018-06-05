//Membuat Class dan Meng-Instance nya.

class Kalkulator{

	constructor(angka1 =0, angka2 =0) {
		this.angka1 = angka1;
		this.angka2 = angka2;
		this.hasil = 0;
	}

	tambah() {
		this.hasil = this.angka1 + this.angka2;
	}

	kurang() {
		this.hasil = this.angka1 - this.angka2;
	}

	bagi() {
		this.hasil = this.angka1 / this.angka2;
	}
	
	kali() {
		this.hasil = this.angka1 * this.angka2;
	}

		tampilkanHasil() {
		return console.log(this.hasil);
	}

}

const angka1 = 2;
const angka2 = 3;
const kalkulator = new Kalkulator(angka1, angka2);

kalkulator.tambah()
console.log(kalkulator.hasil) // 5
kalkulator.kurang()
console.log(kalkulator.hasil) // -1
kalkulator.kali()
console.log(kalkulator.hasil) // 6
kalkulator.angka1 = 6
kalkulator.angka2 = 2
kalkulator.bagi()
console.log(kalkulator.hasil) // 3


//Melakukan inheritanc terhadap Class.
class buah {
	constructor (warna,harga,jumlah){
		this.warna = warna
		this.harga = harga
		this.jumlah = jumlah
		this.rasa = false
	}
	rasaEnak(){
		this.rasa = true
	}
	rasaTidakEnak(){
		this.rasa = false
	}
}

class anggur extends buah {
	constructor (warna,harga,jumlah){
		super (warna,harga,jumlah)
		this.kesegaran = false
	}

	kesegaranBuah(){
		console.log("Buah ini segar");
		this.kesegaran = true
	}
}

class salak extends buah {
	constructor (warna,harga,jumlah){
		super (warna,harga,jumlah)
		this.strukturKulit = false
	}

	kematanganBuah(){
		console.log("Buah ini baru matang");
		this.strukturKulit = true
	}
}

const buahAnggur = new anggur('ungu','25000',10);
const buahSalak = new salak('coklat','10000',5);


buahAnggur.kesegaranBuah()
buahSalak.kematanganBuah()




