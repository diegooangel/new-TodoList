console.log('hola');

const form = document.getElementById('form');
//console.log(form);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    //console.log('funciona');
    addElement();
})

function addElement(){
    const input = document.getElementsByClassName('input')[0].value;
    console.log(input);

    const ul = document.getElementById('ul');
    const element = document.createElement('li');
    const content = document.createTextNode(input);

    ul.appendChild(element);
    element.appendChild(content);
    element.appendChild(deleteElement());
}

function deleteElement(){
    const li = document.querySelector('li');
    const button = document.createElement('button');
    const contentButton = document.createTextNode('Eliminar');

    li.appendChild(button);
    button.appendChild(contentButton);

    button.addEventListener('click', (e) => {
        const contentEvent = e.target.parentElement; //padre del elemento
        console.log(contentEvent);
        ul.removeChild(contentEvent);
        
    })

    return button;  //retornamos el button para poder usarlo en addElement
}