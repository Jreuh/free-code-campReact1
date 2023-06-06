const nums = [1, 2, 3, 4, 5];
const squares = nums.map((element) => {
  return element * element;
});
const names = ["alice", "bob", "charlie", "danielle"];
const uppercaseName = names.map(
  (name) => name[0].toUpperCase() + name.slice(1)
);
console.log(uppercaseName);
const pokemon = ["Bulbasaur", "Charmender", "Squirtle"];
const elements = pokemon.map((mon) => `<p>${mon}</p>`);
console.log(elements);
