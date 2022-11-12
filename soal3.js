function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (dataArray.length < 5) {
    return "Jumlah angka dalam array harus lebih dari 5";
  } else if (nilaiAwal > nilaiAkhir) {
    return "Nilai akhir harus lebih besar dari nilai awal";
  }
  const array = dataArray.filter((arrFilter) => arrFilter > nilaiAwal && arrFilter < nilaiAkhir);
  const result = array.sort((a, b) => a - b);
  if (result.length === 0) {
    return "Nilai tidak ditemukan";
  }
  return result;
}

console.log(seleksiNilai(5, 20, [2, 25, 4, 1, 30, 18, 17]));
console.log(seleksiNilai(15, 3, [2, 25, 4, 1, 30, 18, 17]));
console.log(seleksiNilai(4, 17, [2, 25, 4]));
console.log(seleksiNilai(5, 7, [2, 25, 4, 1, 30, 8]));
