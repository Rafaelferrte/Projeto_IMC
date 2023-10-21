function calcular() {
    res = document.getElementById('resultado');
    clas = document.getElementById('classificacao');
    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;

    const tipoPeso = Boolean(Number(peso) < 0);
    const tipoAltura = Boolean(Number(altura) < 0);

    let imc = peso / (Math.pow(altura, 2));
    imc = imc.toFixed(2);
    

    if (tipoPeso == Boolean(true) || tipoAltura == Boolean(true)) {
        res.innerHTML = "<p>Verifique as informações digitadas</p>";
        clas.innerHTML = "";
    }
    else {
        if (imc == Infinity || imc == 0) {
            res.innerHTML = "<p>Verifique as informações digitadas</p>";
            clas.innerHTML = "";
        }
        else {
            if (imc < 18.5) {
                imc = imc.toString();
                imc = imc.replace(".", ",");
                res.innerHTML = "<p>O seu IMC é " + imc + "</p>";
                clas.innerHTML = "<p>Abaixo do Peso</p>";
                clas.style.color = 'tomato';
            }
            else if ((imc >= 18.5) & (imc <= 24.9)) {
                imc = imc.toString();
                imc = imc.replace(".", ",");
                res.innerHTML = "<p>O seu IMC é " + imc + "</p>";
                clas.innerHTML = "<p>Peso Normal</p>";
                clas.style.color = 'green';
            }
            else if ((imc >= 25) & (imc <= 29.9)) {
                imc = imc.toString();
                imc = imc.replace(".", ",");
                res.innerHTML = "<p>O seu IMC é " + imc + "</p>";
                clas.innerHTML = "<p>Sobrepeso</p>";
                clas.style.color = 'yellow';
            }
            else if ((imc >= 30) & (imc <= 34.9)) {
                imc = imc.toString();
                imc = imc.replace(".", ",");
                res.innerHTML = "<p>O seu IMC é " + imc + "</p>";
                clas.innerHTML = "<p>Obesidade Grau I</p>";
                clas.style.color = 'orange';
            }
            else if ((imc >= 35) & (imc <= 39.9)) {
                imc = imc.toString();
                imc = imc.replace(".", ",");
                res.innerHTML = "<p>O seu IMC é " + imc + "</p>";
                clas.innerHTML = "<p>Obesidade Grau II</p>";
                clas.style.color = 'tomato';
            }
            else if (imc >= 40) {
                imc = imc.toString();
                imc = imc.replace(".", ",");
                res.innerHTML = "<p>O seu IMC é " + imc + "</p>";
                clas.innerHTML = "<p>Obesidade Grau III ou Mórbida</p>";
                clas.style.color = 'red';
            }
            
            else {
                res.innerHTML = "";
                clas.innerHTML = "";
            }
        }
    }
}


