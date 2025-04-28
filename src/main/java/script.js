function calcularSenhas() {
    let quantidade = 0;

    // O último dígito é 0, então só precisamos escolher os três primeiros dígitos
    for (let d1 = 0; d1 <= 9; d1++) {
        for (let d2 = 0; d2 <= 9; d2++) {
            for (let d3 = 0; d3 <= 9; d3++) {
                // Todos os dígitos precisam ser diferentes entre si e de 0
                if (d1 !== d2 && d1 !== d3 && d2 !== d3 && d1 !== 0 && d2 !== 0 && d3 !== 0) {
                    // Soma dos três primeiros dígitos + 0 (último dígito)
                    if (d1 + d2 + d3 + 0 === 10) {
                        quantidade++;
                        console.log(`Senha possível: ${d1}${d2}${d3}0`);
                    }
                }
            }
        }
    }

    document.getElementById('resultado').textContent = `Existem ${quantidade} senhas possíveis.`;
}
