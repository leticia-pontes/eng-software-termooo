function adicionarClasseAtiva() {
    var blocosLetras = document.querySelectorAll('.bloco-palavras__fila.active .bloco-palavras__letra');
    
    blocosLetras.forEach(function(blocoLetra) {
        blocoLetra.addEventListener('click', function() {
            blocosLetras.forEach(function(bloco) {
                bloco.classList.remove('active');
            });
            blocoLetra.classList.add('active');
        });
    });
}
    
function verificaCamposVazios() {
    var filas = document.querySelectorAll('.bloco-palavras__fila');

    filas.forEach(function(fila) {
        var blocos = document.querySelectorAll('.bloco-palavras__letra');
        
        blocos.forEach(function(bloco) {
            if(bloco.textContent == '') {
                console.log(bloco.textContent);
            }
        })
    })
}

verificaCamposVazios();


function adicionarLetrasNosCampos() {
    var teclasTeclado = document.querySelectorAll('.teclado__tecla');
    
    teclasTeclado.forEach(function(tecla) {
        tecla.addEventListener('click', function() {
            inserirLetra(tecla);
        });
    });

    document.addEventListener('keydown', function(event) {

        var letra = String.fromCharCode(event.keyCode);

        if (/[a-zA-Z]/.test(letra)) {

            var teclaCorrespondente = document.querySelector('.teclado__tecla.tecla_' + letra.toLowerCase());

            if (teclaCorrespondente) {
                inserirLetra(teclaCorrespondente);
            }
        }
    });
}

function inserirLetra(tecla) {
    var letra = tecla.className.split('tecla_')[1].toUpperCase();
    var blocoAtivo = document.querySelector('.bloco-palavras__letra.active');

    var filas = document.querySelectorAll('.bloco-palavras__fila');

    if (blocoAtivo) {
        blocoAtivo.textContent = letra;
        blocoAtivo.classList.remove('active');
        blocoAtivo.nextElementSibling.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', adicionarClasseAtiva);
document.addEventListener('DOMContentLoaded', adicionarLetrasNosCampos);


// MAQUINA DE ESCREVER

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i) {   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 40 * i)

  });
}
const texto = document.querySelector('.pagina__texto');
typeWrite(texto);