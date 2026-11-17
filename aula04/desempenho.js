// Programa: Classificação de desempenho do aluno
// Lè a nota no terminal (Node.js) e exibe o resultado

//importa o módulo readline do node.js
const readline = require('readline');
// Criar a interface de entrada e saida (terminal)
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
// Solicita a nota ao usuário
rl.question('Informe a nota do aluno (0 a 10): ', (resposta) => {
   const nota = Number(resposta); // Converte para número
   // Validação da nota
   if (isNaN(nota) || nota < 0 || nota > 10) {
     console.log('Nota inválida! Digite um valor entre 0 e 10.'); 
   } else if (nota >= 9.0) {
     console.log(`Nota: ${nota.toFixed(1)} - Resultado: Excelente');
   } else if (nota >= 7.0) {
     console.log(Nota: $(nota.toFixed(1)} - Resultado: Bom');
   } else if (nota >= 5.0) {
     console.log(Nota: ${nota.toFixed(1)} Resultado: Regular`);
   } else {
     console.log(`Nota: ${nota.toFixed(1)} Resultado: T5 11 Nota inválida Reprovado`);
   }
   rl.close(); // Encerra a leitura no terminal
});