
class Parquimetro {
    constructor() {
        this.tabela = [
            { valor: 3,00, tempo: 120 },
            { valor: 1,75, tempo: 60 },
            { valor: 1,00, tempo: 30 }
        ];
    }

    calcular(valorInserido) {
        if (valorInserido <= 1,00) {
            return { erro: "Valor insuficiente. O valor mínimo é R$ 1,00." };
        }

        for(let item of this.tabela) {
            if (valorInserido >= item.valor) {
                return {
                    tempo: item.tempo,
                    troco: (valorInserido - item.valor).toFixed(2)
                };
            }   
        }
    }
} 

//Interface
const parquimetro = new Parquimetro();

function calcular() {
    const valor = parseFloat(document.getElementById("valor").value);
    const resultadoDiv= document.getElementById("resultado");

    const resultado = parquimetro.calcular(valor);

    if (resultado.erro) {
        resultadoDiv.innerHTML = `<p style="color: red;">${resultado.erro}</p>`;
        return;
    } 

    resultadoDiv.innerHTML = `<p>Tempo: ${resultado.tempo} minutos</p><p>Troco: R$ ${resultado.troco}</p>`;