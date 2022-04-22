const data = require('../data/zoo_data');

/* 9. Implemente a função getOldestFromFirstSpecies
A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

O que será avaliado

Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie. */

/* Primeiro vejo se o id do meu parametro fornecido será igual ao id que tem do colaborador do meu data */
function getOldestFromFirstSpecies(id) {
  const pessoaColaboradora = data.employees.find((colaborador) => colaborador.id === id);
  const animalResponsavel = pessoaColaboradora.responsibleFor[0];
  const verificacao = data.species.find((animalAtual) => animalAtual.id === animalResponsavel);
  const animalMaisVelho = verificacao.residents.sort((a, b) => b.age - a.age)[0];
  return [animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age];
}

/* No data eu vejo que ja tem o animal que a pessoa é responsavel no employees. Como quero o primeiro, busco no meu data o responsible flor e pefo a primeira posição do array que no caso é 0 */
/* depois verifico se o animal fornecido será o mesmo que o animal que a pessoa colaboradora é responsavel */
/* ja encontramos a pessoa, a especie e depois preciso fazer um array com tudo que foi pedido no requisito. uso o sort e coloco em ordem decrescente. Entao o primeiro será o mais velho. Preciso pegar apenas o primeiro, por isto index 0 */
module.exports = getOldestFromFirstSpecies;
