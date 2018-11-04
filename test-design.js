const element = document.getElementById("open-mobile-menu");
const clouseButtonElement = document.getElementById("close");

element.addEventListener("click", ()=>{   
    const mobileNavContainer = document.getElementById('mobile-container');
    mobileNavContainer.className += ' open'; 
});

window.addEventListener("mouseup", (event) => {
    const menu = document.getElementById('mobile-container');
    if(event.target != menu ) {
        menu.classList.remove('open'); 
    };

});
