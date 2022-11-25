function changeTabs(idConteudo) {
    console.log(idConteudo);
    const elements = document.getElementsByClassName('active');
    console.log(elements);
    while(elements.length > 0 ) {
        elements[0].classList.remove('active');
    }
    document.getElementById(idConteudo).classList.add("active");
}

