function PutInnerText() {
    let InnerTextChange = document.querySelector('#createInnerText');
    alert(document.querySelector('#ChangeText').innerText);
}

document.addEventListener('click', PutInnerText);

function PutTextContent() {
    let TextContentChange = document.querySelector('#createTextCont');
    alert(document.querySelector('#ChangeCont').textContent);
}

document.addEventListener('click', PutTextContent);

function PutInnerHTML() {
    let InnerHTMLChange = document.querySelector('#createInnerHTML');
    alert(document.querySelector('#ChangeHTML').innerHTML);
}

document.addEventListener('click', PutInnerHTML);