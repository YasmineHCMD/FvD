console.log("Hello world!")

const dropdown_knop = document.getElementById("dropdown_knop");
const dropdown_menu = document.getElementById("dropdown_menu");

let stateMenu = false;

function menuToggle(){
    if(stateMenu == false){
        dropdown_menu.style.display = 'flex';
        stateMenu=true;
        dropdown_knop.textContent = 'Minder ^';
    } else {
        dropdown_menu.style.display = 'none';
        stateMenu=false;
        dropdown_knop.textContent = 'Meer v'
    }
}

dropdown_knop.addEventListener('click',menuToggle);