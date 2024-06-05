document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});
const conversion_a_ml = {
    'ml': 1,
    'l': 1000,
    'gal_us': 3785.41,
    'gal_uk': 4546.09,
    'oz_us': 29.5735,
    'oz_uk': 28.4131,
    'pt_us': 473.176,
    'pt_uk': 568.261,
    'qt_us': 946.353,
    'qt_uk': 1136.52,
    'cup': 240,
    'in³': 16.3871,
    'ft³': 28316.8,
    'yd³': 764555,
    'm³': 1000000
};

function convertir() {
    const valor = parseFloat(document.getElementById('valor').value);
    const unidadOrigen = document.getElementById('unidad-origen').value;
    const unidadDestino = document.getElementById('unidad-destino').value;

    if (isNaN(valor)) {
        document.getElementById('conversion').innerText = 'Por favor, ingrese un valor válido';
        return;
    }

    const valorEnMl = valor * conversion_a_ml[unidadOrigen];
    const valorConvertido = valorEnMl / conversion_a_ml[unidadDestino];

    document.getElementById('resultado').value = valorConvertido.toFixed(6);
    document.getElementById('conversion').innerText = `${valor} ${unidadOrigen} es igual a ${valorConvertido.toFixed(6)} ${unidadDestino}`;
}
function convertirtem() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const kelvin = parseFloat(document.getElementById('kelvin').value);
    const rankine = parseFloat(document.getElementById('rankine').value);

    if (!isNaN(celsius)) {
        document.getElementById('fahrenheit').value = (celsius * 9/5) + 32;
        document.getElementById('kelvin').value = celsius + 273.15;
        document.getElementById('rankine').value = (celsius + 273.15) * 9/5;
    } else if (!isNaN(fahrenheit)) {
        document.getElementById('celsius').value = (fahrenheit - 32) * 5/9;
        document.getElementById('kelvin').value = ((fahrenheit - 32) * 5/9) + 273.15;
        document.getElementById('rankine').value = fahrenheit + 459.67;
    } else if (!isNaN(kelvin)) {
        document.getElementById('celsius').value = kelvin - 273.15;
        document.getElementById('fahrenheit').value = (kelvin - 273.15) * 9/5 + 32;
        document.getElementById('rankine').value = kelvin * 9/5;
    } else if (!isNaN(rankine)) {
        document.getElementById('celsius').value = (rankine - 491.67) * 5/9;
        document.getElementById('fahrenheit').value = rankine - 459.67;
        document.getElementById('kelvin').value = rankine * 5/9;
    } else {
        alert('Por favor, ingrese un valor válido en uno de los campos');
    }
}
function convertWeight() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        alert("Por favor, ingrese un valor numérico válido.");
        return;
    }

    const conversionRates = {
        mt: { mt: 1, kg: 1000, g: 1000000, lb: 2204.62, oz: 35273.96 },
        kg: { mt: 0.001, kg: 1, g: 1000, lb: 2.20462, oz: 35.27396 },
        g: { mt: 0.000001, kg: 0.001, g: 1, lb: 0.00220462, oz: 0.03527396 },
        lb: { mt: 0.000453592, kg: 0.453592, g: 453.592, lb: 1, oz: 16 },
        oz: { mt: 0.0000283495, kg: 0.0283495, g: 28.3495, lb: 0.0625, oz: 1 }
    };

    const result = inputValue * conversionRates[inputUnit][outputUnit];
    document.getElementById('outputValue').value = result.toFixed(5);
}
