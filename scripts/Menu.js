const navLinks = document.getElementById('nav-list');

const openButton = document.getElementById('openbtn');

const closeButton = document.getElementById('closebtn');

function dropMenu(btn) {
    if (btn === openButton) {
        navLinks.style.display = 'block';
        openButton.style.display = "none";
        closeButton.style.display = "inline";
    } 
    else if (btn === closeButton) {
        navLinks.style.display = 'none';
        openButton.style.display = "inline";
        closeButton.style.display = "none";
    }
}

openButton.addEventListener('click', function(){
    dropMenu(this);
});
closeButton.addEventListener('click', function(){
    dropMenu(this);
});
