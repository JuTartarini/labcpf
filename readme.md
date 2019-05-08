# Validador de cpf

Está biblioteca se destina a validar cpf

## Como instalar:

```zsh
$  npm install labcpf
```

## Como utilizar:
* Formato de entrada da função: string.
* Insira apenas os números do cpf, não insira pontos, traços, letras ou vírgulas.


Exemplo:

```node
const cpfValidator = require('labcpf');

console.log(cpfValidator('10695297619'));
// return true

console.log(cpfValidator("106.952.976-19"));
// return "false"
```
