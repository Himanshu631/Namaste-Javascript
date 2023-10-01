const marvel_heros = ["thor", "Ironman"];
const dc_heros = ["superman", "flash"];

const all_heros = marvel_heros.concat(dc_heros)

//console.log(all_heros);

const all_heros_2 = [...marvel_heros,...dc_heros];

//console.log(all_heros_2);

Array.isArray("Paul")
console.log(Array.isArray("Paul"));
console.log(Array.from("Paul"));
console.log(Array.from({name:"Paul"}));

