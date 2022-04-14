const data = require('../data/zoo_data');
/* 2. Implemente a função getAnimalsOlderThan
Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.
Observações técnicas
Deve retornar um valor booleano. */

/* https://www.figma.com/file/zjaQmPu6M8zb6E05KviIQa/Revis%C3%A3o-Array-Functions?node-id=6%3A810 */

function getAnimalsOlderThan(animal, age) {
  const procuraAnimal = data.species.find((animalDado) => (animalDado.name === animal));
  if (procuraAnimal.residents.find((idadeAnimal) => (idadeAnimal.age < age))) {
    return false;
  }
  return true;
}

module.exports = getAnimalsOlderThan;

/* primeiro declarei o caminho para procurar o caminho dos animais e compara os nomes, depois a condicional para comparar as idades e retornar caso o parametro que passamos para a idade retorne verdadeiro ou falso */

/* RESOLUÇÃO ABAIXO EU NAO CONSEGUI PEGAR O AGE PQ É UM ARRAY DENTRO DO OBJETO, ENTAO TIVE QUE MUDAR A RESOLUÇÃO
  const nomeAnimal = data.species.name; 
  const idadeAnimal = data.species.residents.age;
  if (nomeAnimal === animal && idadeAnimal >= age) {
    return true;
  }
  return false;
}
getAnimalsOlderThan(); */

/* Neste caso, coloquei uma const para alcançar o nome do animal e uma para a idade (para serem achadas no array dentro do objeto), Depois um if para se o animal dado como parametro for igual ao animal que tem no objeto e se a idade dada é maior ou igual ao do objeto para que  */
