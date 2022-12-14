const data = require('../data/zoo_data');

/* 5. Implemente a função countAnimals
Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

Observações técnicas
Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino. */

/* Fonte de for each:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach */

/* Fonte utilizada para realização: Aula ao vivo e repositório Live Vectures Aula 8.4 - reduce
https://github.com/tryber/sd-021-a-live-lectures/pull/27/files#diff-12b5f6f99733adeb823da04c947d0a384ae87da7ba3e3226abc1743d46b0c1c2
Exemplo:
const totalDeCervejasEmEstoque = cervejas.reduce((total, cerveja) => {
  total += cerveja.estoque;
  return total;
}, 0); */

function countAnimals(animal) {
  if (animal === undefined) {
    const nenhumAnimal = {};
    data.species.forEach((animalAtual) => {
      nenhumAnimal[animalAtual.name] = animalAtual.residents.length;
    });
    return nenhumAnimal;
  }
  if (animal.sex === undefined) {
    return data.species.find(
      (animalAtual) => animalAtual.name === animal.specie,
    ).residents.length;
  }
  return data.species
    .find((animalAtual) => animalAtual.name === animal.specie)
    .residents.filter((animalAtual) => animalAtual.sex === animal.sex).length;
}
/* Primeiro se não existir o animal, passa por todas as espécies retornando meu callback que é nada (não existe) passa por todos os nomes dos bichos e joga junto com o index que é o length (vejo o tamanho do array de e o nome e volto com os dois).
aí jogo no index com o objeto para pegar o nome e q quantidade pra retornar.
Primeiro quando eu tenho a especie e NAO tenho o sexo, so utilizo a especie. e retorno a especie e o numero que tenho.
o animalSelecionado esta sendo utilizado para o primeiro if se nao tiver sexo e se eu tiver sexo, vou dizer quantos tem baseado no sexo (se minha callback for igual ao genero do animal) e retorno o tamanho desse array */
/* console.log(countAnimals('penguins')); */

module.exports = countAnimals;

/* Primeiro if diz que se o param fornecido nao estiver dentre as especies existentes, pega o array todo, executa a função em cada elemento e retorna todos, neste caso o for each vai percorrer tudo para achar o nome de cada animal no objeto e  o tamanho do array de animais que será o numero existente deste animal em questão. Retornará todos eles para satisfazer o requisito do projeto */

/* Segunda parte do requisito, quero saber (independente do genero), quantos animais tenho com a especie fornecida no parametro. Neste caso comparo se o animal selecionado é igual ao animal existente no meu array, utilizo o find para procurar a primeira opção que satisfaça o meu pedido e retorno a quantidade deste animal específico */

/* Na terceira parte eu preciso fornecer a quantidade de animais de acordo com a especie e gênero, então preciso colocar 2 param */
/* console.log(countAnimals());
  const contadorDeAnimais = data.species.reduce((accAnimais, animais) => {
    accAnimais += animais.species.popularity;
    return accAnimais;
  }); */

/* const selecionarAnimais = (animalSelec) => animalSelec.name === animal.specie;
const animaisSelecionados = species.find(selecionarAnimais);
return animaisSelecionados.residents.length; */

/* OUTRA FORMA DE FAZER QUE NÃO PASSOU:
function countAnimals(animal) {
  let indexAnimal = 0;
  if (!animal) {
    const todosOsAnimaisObj = {};
    species.forEach((animais) => {
      indexAnimal = animais.residents.length;
      indexAnimal = todosOsAnimaisObj[`${animais.name}`];
    });
    return todosOsAnimaisObj;
  }
    const animalSelecionado = species.find((animalEspcfc) => animalEspcfc.name === animal.specie);
    if (!animal.sex) {
      indexAnimal = animalSelecionado.residents.length;
      return indexAnimal;
    }
    indexAnimal = animalSelecionado.residents
    .filter((generoAnimal) => generoAnimal.sex === animal.sex).length;
    return indexAnimal;
} */
