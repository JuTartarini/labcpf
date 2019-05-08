function cpfValidator(value) {
    return ((typeof value === "string") && (value.length === 11) && 
      ([...new Set(value.split(""))].length > 1) && validaCpf(value)) ? true : false;
  }	
      
  function validaCpf(cpf) {
    let Soma = 0, Resto = 0;
    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
    ((Resto === 10) || (Resto === 11))?  Resto = 0 : Resto;
    if (Resto !== parseInt(cpf.substring(9, 10))) return false;
    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    ((Resto === 10) || (Resto === 11))?  Resto = 0 : Resto;
    if (Resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
  }
  
  module.exports = cpfValidator;