/* 1. Implemente a função getSpeciesByIds
Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.
Observações técnicas
O parâmetro desta função pode ser alterado para atender ao requisito proposto. */

const data = require('../data/zoo_data');
/* const { species } = require('../data/zoo_data'); */

/* MINHAS OBSERVAÇÕES: Utilização do rest pois principal uso é função com vários parametros */
/* https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects */
/* https://www.figma.com/file/zjaQmPu6M8zb6E05KviIQa/Revis%C3%A3o-Array-Functions?node-id=6%3A810 */

function getSpeciesByIds(...ids) {
  /* let BuscaDeEspecies = species.filter((specie) => specie.id); */
  if (ids === 0) {
    return [];
  }
  if (ids !== 0) {
    return data.species.filter((callback) => ids.includes(callback.id));
  }
}
console.log(getSpeciesByIds());

/*   Abaixo segue forma de fazer com o map, porém achei mais complicado

    if (ids === 0) {
    return [];
  }
    if (ids !== 0) {
      return ids.map((callback) => species.find((idNovo) => idNovo.id === callback));
    }
  } */

/* map invoca a callback, faz manipulação dos elementos e retorna array novo diferente do atual. Estou usando para percorrer e comparar */
/* Segundo if, pega a callback e compara para ver se tem no objeto se tem o id */
module.exports = getSpeciesByIds;
