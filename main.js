document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('entrarDigitos');
    const outputText = document.getElementById('salidaTexto');
    const btnEncriptar = document.getElementById('btnEncriptar');
    const btnDesencriptar = document.getElementById('btnDesencriptar');
    const btnCopiar = document.getElementById('copiar');
    const textoInfo = document.getElementById('texto');

    function encrypt(text) {
        return text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function decrypt(text) {
        return text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function updateOutput(result) {
        outputText.value = result;
        textoInfo.style.display = result ? 'none' : 'block';
        outputText.style.display = result ? 'block' : 'none';
        btnCopiar.style.display = result ? 'block' : 'none';
    }

    function clearInput() {
        inputText.value = '';
    }

    btnEncriptar.addEventListener('click', function() {
        const text = inputText.value.toLowerCase();
        const encryptedText = encrypt(text);
        updateOutput(encryptedText);
        clearInput();
    });

    btnDesencriptar.addEventListener('click', function() {
        const text = inputText.value;
        const decryptedText = decrypt(text);
        updateOutput(decryptedText);
        clearInput();
    });

    btnCopiar.addEventListener('click', function() {
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
        clearInput();
    });
}); 

const chkMantenerTexto = document.getElementById('mantenerTexto');

function clearInput() {
    if (!chkMantenerTexto.checked) {
        inputText.value = '';
    }
}