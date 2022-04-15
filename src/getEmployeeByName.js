const data = require('../data/zoo_data');

/* 3. Implemente a função getEmployeeByName
Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas
Sem parâmetros, retorna um objeto vazio
Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
Quando provido o último nome do funcionário, retorna o objeto do funcionário */

/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find */

function getEmployeeByName(employeeName) {
/*   const primeiroNome = data.employees.firstName;
  const ultimoNome = data.employees.lastName; */
  if (!employeeName) {
    return {};
  }
  return data.employees.find((perfilEmpregado) => { /* procura o empregado antes de fazer a condicional, primeiro que satisfaça a condição */
    if (perfilEmpregado.firstName === employeeName || perfilEmpregado.lastName === employeeName) {
      return true;
    }
    return false;
  });
}
console.log(getEmployeeByName('Bethea'));
/* Primeiro if, coloquei se não existir o nome do empregado, retorna vazio */
/* O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. (Tirado do Developer Mozilla) */
/* Segundo if, vê se o valor da chave do objeto encontrado pelo find  (nome ou sobrenome) é igual a Callback */
module.exports = getEmployeeByName;
