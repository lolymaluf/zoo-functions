const data = require('../data/zoo_data');
/* 7. Implemente a função getAnimalMap
A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e sexo.

Observações técnicas

Analise o teste unitário para entender os retornos que são esperados para esta função.
O que será avaliado

Sem parâmetros, retorna animais categorizados por localização;
Sem a opção includeNames especificada, retorna animais categorizados por localização;
Com a opção includeNames: true especificada, retorna nomes de animais;
Com a opção sorted: true especificada, retorna nomes de animais ordenados;
Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea;
Com a opção sex: 'female' ou sex: 'male' especificada e a opção sorted: true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados; */

/* FONTE: Esta questão a colega de turma Giovanna ficou horas comigo até eu conseguir entender a lógica que embora seja longa, não foi tão complexa como achávamos ser. Então na fonte, vou citar a paciencia da colega Gio para ajudar no requisito sem passar a resposta. */

/* Primeiro filtrar por localização porque tenho que fazer esse requisito em mais funções pra ficar mais legível */

const localizacao = () => {
  const localizacaoanimais = {
    NE: data.species
      .filter((place) => place.location === 'NE')
      .map((animal) => animal.name),
    SE: data.species
      .filter((place) => place.location === 'SE')
      .map((animal) => animal.name),
    NW: data.species
      .filter((place) => place.location === 'NW')
      .map((animal) => animal.name),
    SW: data.species
      .filter((place) => place.location === 'SW')
      .map((animal) => animal.name),
  };
  return localizacaoanimais;
};
/* Depois precisamos adicionar os nomes com push quando recebermos parametro com genero. */

const mesmoSexo = (genre, specie) =>
  specie.residents.reduce((acc, animal) => {
    if (genre.sex === animal.sex) {
      acc.push(animal.name);
    }
    if (genre.sex === undefined) {
      acc.push(animal.name);
    }
    return acc;
  }, []);

    /* Precisamos filptrar por sexo por causa do requisito e por isto e pela dica do atanes de dividir em novas funções, melhor adicionar uma nova função para isto. */

function getAnimalMap(
  options = { incluirNomes: false, sorted: false, sex: false },
) {
  const animais = data.species.reduce(
    (acc, animal) => {
      if (options.includeNames === true) {
        const arrayAnimal = mesmoSexo(options, animal);
        if (options.sorted === true) {
          arrayAnimal.sort();
        }
        acc[animal.location].push({ [animal.name]: arrayAnimal });
      } else {
        return localizacao();
      }
      return acc;
    },
    { NE: [], NW: [], SE: [], SW: [] },
  );
  return animais;
}

module.exports = getAnimalMap;
