// Calculadora de Compra - Atividade Prática 01
// 1) Declaração das variáveis
const preco = 39.90;               // Preço do produto (R$)
const quantidade = 3;              // Quantidade a ser comprada
const taxaDesconto = 0.10;         // Desconto de 10% (10/100)

// 2) Cálculos
const total = preco * quantidade;         // Total da compra
const desconto = total * taxaDesconto;    // Valor do desconto (10%)
const valorFinal = total - desconto;      // Valor final a pagar

// 3) Exibição dos resultados
console.log("Preço do produto: R$ " + preco.toFixed(2));
console.log("Quantidade: " + quantidade);
console.log("Valor total: R$ " + total.toFixed(2));
console.log("Desconto (10%): R$ " + desconto.toFixed(2));
console.log("Valor final a pagar: R$ " + valorFinal.toFixed(2));