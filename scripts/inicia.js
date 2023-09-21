console.log('iniciando...')
document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(addScript, 1000)
});

function addScript() {

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function() {
        console.log("Added Script");
    };
    script.src = './scripts/atualiza.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}