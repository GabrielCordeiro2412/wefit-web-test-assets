//Menu
function handleMenu() {
    const elementsMenu = document.querySelectorAll('[role="group"]');
    elementsMenu.forEach(function (element) {
        element.classList.remove('btn-group-vertical');
    });
}

//Header
function handleHeader() {
    document.querySelector('.row > .col-lg-12 > .jumbotron').classList.add('text-right', 'bg-secondary', 'text-white');
    const buttonHeader = document.querySelectorAll('[role="button"]');
    buttonHeader.forEach(function (button) {
        button.classList.remove('btn-primary');
        button.classList.add('btn-success');
    });
}

//Card
function handleCard() {
    const elementCard = document.querySelector(".card").parentElement.parentElement
    elementCard.style.flexDirection = "row-reverse";

    const cardAnimais = elementCard.children[1];

    elementCard.removeChild(cardAnimais);

    const cardToMove = elementCard.children[3];
    elementCard.insertBefore(cardAnimais, cardToMove);

    const buttonCardAnimais = cardAnimais.querySelector(".btn");
    buttonCardAnimais.style.backgroundColor = "#27A844";
    buttonCardAnimais.style.borderColor = "#27A844";
}

//Lista
function handleAddItens() {
    const fourthListItem  = document.createElement("li");
    fourthListItem .className = "list-group-item";
    fourthListItem .textContent = "Quarto item";

    const fifthListItem = document.createElement("li");
    fifthListItem.className = "list-group-item";
    fifthListItem.textContent = "Quinto item";

    const lista = document.querySelector(".list-group");
    lista.appendChild(fourthListItem );
    lista.appendChild(fifthListItem);

    const itens = lista.getElementsByTagName("li");
    for (let i = 0; i < itens.length; i++) {
        itens[i].classList.remove("active");
    }

    fourthListItem .classList.add("active");
}

handleMenu()
handleHeader()
handleCard()
handleAddItens()