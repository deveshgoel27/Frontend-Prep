// Eevnt bubbling example

const div = document.querySelector('div');
const form = document.querySelector('form');
const button = document.querySelector('button');

div.addEventListener('click', function () {
    alert('Div clicked');
});

button.addEventListener('click', function () {
    alert('Button clicked');
});

form.addEventListener('click', function () {
    alert('Form clicked');
});


//q2- event.target vs event.currentTarget

const div = document.querySelector('div');
const form = document.querySelector('form');
const button = document.querySelector('button');

div.addEventListener('click',func);
form.addEventListener('click',func);
button.addEventListener('click',func);

function func(event) {
    alert(
        "currentTarget: " + event.currentTarget.tagName +
        "\ntarget: " + event.target.tagName +
        "\ncurrentTarget === target: " + (event.currentTarget === event.target)
    )
}

// Q3 - event capturing

const div = document.querySelector('div');
const form = document.querySelector('form');
const button = document.querySelector('button');

div.addEventListener('click', function () {
    alert('Div clicked');
});

button.addEventListener('click', function () {
    alert('Button clicked');
});

form.addEventListener('click', function () {
    alert('Form clicked');
},{
    capture: true
});

// Event delegation

document.querySelector(".products").addEventListener("click",(event) => {
    if(event.target.tagName === "SPAN") {
        window.location.href += '/' + event.target.className;
    }
});