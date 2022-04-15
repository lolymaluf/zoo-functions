const data = require('../data/zoo_data');

/* 3. Implemente a função getEmployeeByName
Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas */

/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find */

function getEmployeeByName(employeeName) {
/*   const primeiroNome = data.employees.firstName;
  const ultimoNome = data.employees.lastName; */
  if (!employeeName) {
    return {};
  }
  return data.employees.find((perfilEmpregado) => { /* procura o empregado antes de fazer a condicional */
    if (employeeName === perfilEmpregado.firstName || employeeName === perfilEmpregado.lastName) {
      return true;
    }
    return false;
  });
}
getEmployeeByName('Bethea');
/* Primeiro if, coloquei se não existir o nome do empregado, retorna vazio */

module.exports = getEmployeeByName;
