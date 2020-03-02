var campoCep = document.querySelector("#cep");

campoCep.oninvalid = function() {
    this.setCustomValidity('');

    if(!this.validity.valid){
        this.setCustomValidity('Favor corrigir o campo  cep');
        this.parentNode.classList.add('contatoCampo--erro')
    }
}