const links = document.querySelectorAll(".navigation__list"),
          toggle = document.querySelector('.navigation__toggle');
 
    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.checked = false;
        })
    })




