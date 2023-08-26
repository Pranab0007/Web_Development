// Auto Text Changer Functionality

const textTyper = document.querySelector('.textTyper');

const autoTextChanger = () => {

    setTimeout(() => {
        textTyper.innerHTML = "Mechanical Engineer";
    }, 0);

    setTimeout(() => {
        textTyper.innerHTML = "Learner";
    }, 5000);

    setTimeout(() => {
        textTyper.innerHTML = "Problem Solver";
    }, 10000);

    setTimeout(() => {
        textTyper.innerHTML = "Designer";
    }, 15000);

}

autoTextChanger();
setInterval(autoTextChanger, 20000);

// Theme Changing Functionality
const theme_btn = document.querySelector('.theme_btn');
const themeBtnToggle = document.querySelector('.themeBtnToggle');
const themeIcon = document.querySelector('.themeIcon');
const logoImg = document.querySelector('.logoImg');

theme_btn.onclick = () => {

    themeBtnToggle.classList.toggle('active');

    if(themeBtnToggle.classList.contains('active')) {

        logoImg.src = '../images/PortfolioLogo.png';
        themeIcon.src = '../img/moon.png';
        document.body.classList.add('active');
    }else {

        logoImg.src = '../images/PortfolioLogo.png';
        themeIcon.src = '../img/sun.png';
        document.body.classList.remove('active');
    }
}



// Rsponsive Menu Sliding Functionality
const toggleMenu = document.querySelector('.toggleMenu');
const all_line = document.querySelectorAll('.line');

const nav_right = document.querySelector('.nav_right');

toggleMenu.onclick = () => {

    all_line.forEach(forAllLines => {

        forAllLines.classList.toggle('active');

        if(forAllLines.classList.contains('active')) {

            nav_right.classList.add('active');
        }else {

            nav_right.classList.remove('active');
        }
    })

}
//for tab open in about section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}