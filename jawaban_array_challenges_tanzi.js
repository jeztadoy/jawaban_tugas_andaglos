// Melakukan Looping Data Array
dataHandling = (input) => {
 for (var i = 0; i < input.length; i++) {
  console.log(`Nomor ID  : ${input[i][0]}`)
  console.log(`Nama Lengkap  : ${input[i][1]}`)
  console.log(`TTL   : ${input[i][2]} ${input[i][3]}`)
  console.log(`Hobi   : ${input[i][4]} \n`)
 }
}

var input = [
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input);

// Menggunakan Built-in Function pada Array
dataHandling2 = (input2) => {

	var tanggal = input2[3].split("/");
	input2.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
	input2.splice(4, 1, "Pria", "SMA Internasional Metro");
	input2.splice(1, 1, "Roman Alamsyah");

	console.log(input2)
	switch(tanggal[1]){

		case "01" : console.log(`Januari`); break;
		case "02" : console.log(`Februari`); break;
		case "03" : console.log(`Maret`); break;
		case "04" : console.log(`April`); break;
		case "05" : console.log(`Mei`); break;
		case "06" : console.log(`Juni`); break;
		case "07" : console.log(`Juli`); break;
		case "08" : console.log(`Agustus`); break;
		case "09" : console.log(`September`); break;
		case "10" : console.log(`Oktober`); break;
		case "11" : console.log(`November`); break;
		case "12" : console.log(`Desember`); break;

	}

	console.log(tanggal.sort(function(value1, value2){return value2 - value1}))
	console.log(tanggal.join("-"))
	console.log(input2[1])

}