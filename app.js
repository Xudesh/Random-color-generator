const InputEl = document.querySelector('input');
const body = document.body;
const buttonEl = document.querySelector('#button');

InputEl .addEventListener('click',  ()=> {
    const hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
    body.style.background = hexCode

    
    buttonEl.style.display = 'block'
    buttonEl.textContent = `${hexCode}`
})

