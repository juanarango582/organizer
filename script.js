function organizarBulletPoints() {
    var inputText = document.getElementById('inputText').value;
    var bulletPoints = inputText.split('\n');
    bulletPoints.sort(function (a, b) {
        return cantidadPalabras(b) - cantidadPalabras(a);
    });
    var outputText = '<ul>';
    for (var i = 0; i < bulletPoints.length; i++) {
        outputText += '<li>' + bulletPoints[i] + '</li>';
    }
    outputText += '</ul>';
    document.getElementById('outputText').innerHTML = outputText;
}

function cantidadPalabras(str) {
    return str.split(' ').length;
}