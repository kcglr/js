//primitive
const numbers = [1, 2, 3, 4, 2];

//index of
console.log(numbers.indexOf(1, 2));
//1 - we pass the element we are looking for
//2 - if that element exists in the array the method will return the index(arraydeki yerini) of this element in the array.
//3- if it doesnt exist it will return -1.
//4- virgulden sonra ekledigimiz deger tarama islemine 2. pozisyonda bulunan elementten basladagini gosteriyor. Yani yukaridaki array'e bakarsak taramaya 1den degil 3ten basliyor

//last index of
console.log(numbers.lastIndexOf(2));
// bu ise istenilen degerin arraydeki en son kullanildigi pozisyonunu bize verecek.
// mesela a = [1,2,3,1,4], lastindexOf(1) kullanildiginda js cikti olarak 3 verecek.

//how to see if the given element exist in the array
console.log(numbers.includes(3));
