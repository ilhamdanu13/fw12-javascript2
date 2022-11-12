// 1. toString() = merubah tipe data array menjadi string.
// contoh penggunaan =
const arr = [1, 2, "a", "1a"];
console.log(arr.toString());
// expected output: "1,2,a,1a"

// 2. Object.values() = mengambil nilai pada tipe data objek
// contoh penggunaan =
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

// 3. Object.assign() = berfungsi untuk mengcopy atau menggabungkan properti-properti dalam object yang berbeda.
// contoh penggunaan =
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// expected output: true

// 4. Object.keys() = berfungsi untuk mengembalikkan key (properti)
// contoh penggunaan =
const object = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object));
// expected output: Array ["a", "b", "c"]

// 5. Array.find() = berfungsi untuk mencari data pada element array
// contoh penggunaan =
const array = [5, 12, 8, 130, 44];

const found = array.find((element) => element > 10);

console.log(found);
// expected output: 12

// 6. Array.map() = berfungsi membuat iterasi array baru serta memodifikasi setiap objek arrray dengan fungsi.
// contoh penggunaan =
const arrAy = [1, 4, 9, 16];

// pass a function to map
const map1 = arrAy.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// 7. Array.concat() = befungsi untuk menggabungkan dua array atau lebih tanpa mengubah array yang sudah ada.
// contoh penggunaan =
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// 8. Array.join() = berfungsi untuk Menuliskan elemen-elemen array ke dalam satu string dipisahkan oleh karakter yang kita set
// contoh penggunaan =
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"

// 9. Array.push() = berfungsi menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array yang baru.
// contoh penggunaan =
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// 10. String.substring() = mengembalikan bagian dari string antara indeks awal dan akhir, atau ke akhir string.
// contoh penggunaan =
const str = "Mozilla";

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
