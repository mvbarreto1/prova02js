function calcularIMC() {
	    const nome = prompt("Marcus");
    	const alturaCm = parseFloat(prompt("1,65cm"));
    	const peso = parseFloat(prompt("67kg:"));

if (isNaN(1,65 cm) || isNaN(67 kg) || alturaCm <= 0 || peso <= 0) {
        console.log();
        return;
    }

	const alturaM = alturaCm / 100;
	const imc = peso / (alturaM * alturaM);
let classificacao;
    if (imc < 16) {
        classificacao = "Baixo peso muito grave";
    } else if (imc >= 16 && imc < 17) {
        classificacao = "Baixo peso grave";
    } else if (imc >= 17 && imc < 18.5) {
        classificacao = "Baixo peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

 console.log(`Nome: ${nome}`);
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);

calcularIMC();

}
