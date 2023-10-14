function calcular() {
    res = document.getElementById('resultado');
    clas = document.getElementById('classificacao');
    altura = document.getElementById('altura');
    peso = document.getElementById('peso');

    imc = Number(peso.value) / (Math.pow(Number(altura.value), 2));

    if (imc == Infinity | imc == 0) 
    {
        res.innerHTML = "<p>Verifique as informações digitadas</p>";
    }
    else {
        if (imc < 18.5) 
        {
            res.innerHTML = "<p>O seu IMC é " + imc.toFixed(2) + "</p>";
            clas.innerHTML = "<p>Abaixo do Peso</p>";
            clas.style.color = 'tomato';
        }
        else if ((imc >= 18.5) & (imc <= 24.9)) 
        {
            res.innerHTML = "<p>O seu IMC é " + imc.toFixed(2) + "</p>";
            clas.innerHTML = "<p>Peso Normal</p>";
            clas.style.color = 'green';
        }
        else if ((imc >= 25) & (imc <= 29.9)) 
        {
            res.innerHTML = "<p>O seu IMC é " + imc.toFixed(2) + "</p>";
            clas.innerHTML = "<p>Sobrepeso</p>";
            clas.style.color = 'yellow';
        }
        else if ((imc >= 30) & (imc <= 34.9)) 
        {
            res.innerHTML = "<p>O seu IMC é " + imc.toFixed(2) + "</p>";
            clas.innerHTML = "<p>Obesidade Grau I</p>";
            clas.style.color = 'orange';
        }
        else if ((imc >= 35) & (imc <= 39.9)) 
        {
            res.innerHTML = "<p>O seu IMC é " + imc.toFixed(2) + "</p>";
            clas.innerHTML = "<p>Obesidade Grau II</p>";
            clas.style.color = 'tomato';
        }
        else if (imc >= 40) 
        {
            res.innerHTML = "<p>O seu IMC é " + imc.toFixed(2) + "</p>";
            clas.innerHTML = "<p>Obesidade Grau III ou Mórbida</p>";
            clas.style.color = 'red';
        }
        else
        {
            res.innerHTML = "<p>Verifique as informações digitadas</p>";
        }
    }
}