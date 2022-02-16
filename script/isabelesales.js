function domingo() {
    var img = document.getElementById('salesfoto1');
    var msg = document.getElementById('msg1');
    img.src = 'img/isabele2.jpg';
    msg.innerHTML = 'CHEGOU DOMINGO DIA DE PRAIA';
    legenda = document.querySelector('legend');
    legenda.classList.toggle('msg2');
    document.body.style.backgroundImage = 'linear-gradient(to right, rgb(0, 0, 0), rgb(223, 48, 48))';
}
