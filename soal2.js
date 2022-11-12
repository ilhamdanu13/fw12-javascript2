const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function searchName(string, limit, callback) {
  const result = names.filter((nameFilter) => nameFilter.toLocaleLowerCase().includes(string));

  return callback(result, limit);
}

function callback(result, limit) {
  return result.slice(0, limit);
}

console.log(searchName("an", 3, callback));
