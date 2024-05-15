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
        
        // blocos.forEach(function(bloco) {
        //     if(bloco.textContent == '') {
        //         console.log(bloco.textContent);
        //     }
        // })
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



function showContent(contentId, clickedLink) {
    var contents = document.getElementsByClassName('configuracoes__content');
    var links = document.querySelectorAll('.configuracoes__sidebar-lateral a');
    
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    
    document.getElementById(contentId).classList.add('active');
    clickedLink.classList.add('active');
}


function showPopUp() {
    const popup = document.querySelector('.container-layout');
    const icone_popup = document.querySelector(".suporte");

    popup.style.display = 'flex';
    document.querySelector("body").classList.add("stop-scroll");
    
    icone_popup.addEventListener('click', function() {
        popup.style.display = 'flex';
        document.querySelector("body").classList.add("stop-scroll");
    });
   
    document.getElementById('fechar-popup').addEventListener('click', function() {
        popup.style.display = 'none';
        document.querySelector("body").classList.remove("stop-scroll");
    });
    popup.addEventListener('click', function(){
        popup.style.display = 'none';
        document.querySelector("body").classList.remove("stop-scroll");
    });
}

document.addEventListener('DOMContentLoaded', showPopUp);