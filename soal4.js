// Soal 4 a.

// Data
let data = {
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
const copiedData = { ...data, name: "Ilham Danu", email: "ilham.danu13.id@gmail.com", hobby: "Futsal" };
console.log(copiedData);

// Soal 4 b.

// Ubah data

// Ambil dengan desctructuring
const { street, city } = copiedData.address;
console.log(street);
console.log(city);
