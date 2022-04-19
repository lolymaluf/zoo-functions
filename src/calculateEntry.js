const data = require('../data/zoo_data');

/* 6. Implemente a função calculateEntry
Esta função irá receber um array de visitantes no seguinte formato:

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
Você deve isolar a parte da lógica na função countEntrants que se encontra no mesmo arquivo da função calculateEntry. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

Pessoas com idade menor que 18 anos são classificadas como crianças (child);
Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
O retorno da função deverá ser um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }. */

function countEntrants(entrants) {
  return entrants.reduce(
    (acc, pessoa) => {
      const { age } = pessoa;
      if (age < 18) {
        acc.child += 1;
      } else if (age >= 18 && age < 50) {
        acc.adult += 1;
      } else if (age >= 50) {
        acc.senior += 1;
      }
      return acc;
    },
    { child: 0, adult: 0, senior: 0 },
  );
}
/* declaro a idade como variavel e depois faço 3 ifs para cada faixa etaria. No fim coloco o acc como forma de objeto */

function calculateEntry(entrants) {
  // sewu código aaqui
}
/* É um if for undefined ou um length 0, vai ser zero. depois somo a entrada (primeira função) de cada e pra acessar o objeto jogo a função ponto o parametro que eu quero de cada faixa */
module.exports = { calculateEntry, countEntrants };
