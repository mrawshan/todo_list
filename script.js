function myFunction(event) {
    console.log(event);
    event.srcElement.parentElement.classList.toggle('done');
}

// Adds new li element to the ul element
function addListElement() {
    let li = document.createElement('li');
    let ul = document.querySelector('ul');
    let input = document.querySelector('#userinput');

    if (input.value.length > 0) { // check to make sure input is not empty
        let newItem = document.createTextNode(input.value);

        li.appendChild(newItem);
        li.appendChild(createDeleteButton())
        ul.appendChild(li)

        input.value = "";
    }
}

// creates buttons on all list elements if it doesn't have one
window.onload = () => {
    let liNodes = Array.from(document.querySelectorAll('li'));

    if (liNodes) {
        for (let i in liNodes) {
            if (!liNodes[i].querySelector('button')) liNodes[i].appendChild(createDeleteButton())
        }
    }
};

// function that creates the delete button
function createDeleteButton() {
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete!';
    deleteButton.setAttribute('onclick', 'myFunction(event)')

    return deleteButton;
}