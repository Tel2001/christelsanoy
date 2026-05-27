let click = false;

function HamburgerBtnClick() {
    if (click === false) {
        document.getElementById('nav-links').classList.remove('display-navlinks');
        document.getElementById('nav-links').classList.add('nav-links-show-anim');
        document.getElementById('nav-links').classList.remove('nav-links-hide-anim');
        document.getElementById('theme-btn').style.opacity = '0';
        document.getElementById('theme-btn').style.transition = '.5s';
        document.getElementById('cv-btn').style.opacity = '0';
        document.getElementById('cv-btn').style.transition = '.5s';
        document.getElementById('hamburger-btn').style.transform = 'translate(100%)';
        document.getElementById('hamburger-btn').style.transition = '1s';
        click = true;
    } else if (click === true) {

        document.getElementById('nav-links').classList.remove('nav-links-show-anim');
        document.getElementById('nav-links').classList.add('nav-links-hide-anim');
        document.getElementById('theme-btn').style.opacity = '100%';
        document.getElementById('theme-btn').style.transition = '.5s';
        document.getElementById('cv-btn').style.opacity = '100%';
        document.getElementById('cv-btn').style.transition = '.5s';
        document.getElementById('hamburger-btn').style.transform = 'translate(0)';
        document.getElementById('hamburger-btn').style.transition = '1s';
        setTimeout(() => {
            document.getElementById('nav-links').classList.add('display-navlinks');
        }, 900)
        click = false;
    }
}

let darkmode = false;

function ThemeToggle() {
    if (darkmode === false) {

        document.getElementById('sun').style.backgroundColor = 'white';

        document.getElementById('ray-1').classList.add('ray-animation');
        document.getElementById('ray-2').classList.add('ray-animation');
        document.getElementById('ray-3').classList.add('ray-animation');
        document.getElementById('ray-4').classList.add('ray-animation');
        document.getElementById('ray-5').classList.add('ray-animation');
        document.getElementById('ray-6').classList.add('ray-animation');
        document.getElementById('ray-7').classList.add('ray-animation');
        document.getElementById('ray-8').classList.add('ray-animation');

        setTimeout(() => {
            document.getElementById('ray-1').style.display = 'none';
            document.getElementById('ray-2').style.display = 'none';
            document.getElementById('ray-3').style.display = 'none';
            document.getElementById('ray-4').style.display = 'none';
            document.getElementById('ray-5').style.display = 'none';
            document.getElementById('ray-6').style.display = 'none';
            document.getElementById('ray-7').style.display = 'none';
            document.getElementById('ray-8').style.display = 'none';

            document.getElementById('ray-1').classList.remove('ray-animation');
            document.getElementById('ray-2').classList.remove('ray-animation');
            document.getElementById('ray-3').classList.remove('ray-animation');
            document.getElementById('ray-4').classList.remove('ray-animation');
            document.getElementById('ray-5').classList.remove('ray-animation');
            document.getElementById('ray-6').classList.remove('ray-animation');
            document.getElementById('ray-7').classList.remove('ray-animation');
            document.getElementById('ray-8').classList.remove('ray-animation');
        }, 400);

        document.getElementById('moon').classList.add('moon-2');

        document.getElementById('linkedin').style.backgroundImage = "url('./assets/icon/linkedin-white.png')";
        document.getElementById('behance').style.backgroundImage = "url('./assets/icon/behance-white.png')";
        document.getElementById('github').style.backgroundImage = "url('./assets/icon/github-white.png')";
        document.getElementById('facebook').style.backgroundImage = "url('./assets/icon/facebook-white.png')";

        //Contact
        document.getElementById('contact-linkedin').style.backgroundImage = 'url(./assets/icon/linkedin-white.png)';
        document.getElementById('contact-github').style.backgroundImage = "url('./assets/icon/github-white.png')";
        document.getElementById('contact-behance').style.backgroundImage = "url('./assets/icon/behance-white.png')";
        document.getElementById('contact-facebook').style.backgroundImage = "url('./assets/icon/facebook-white.png')";

        darkmode = true;
        document.documentElement.style.setProperty("--primary-background-color", "#232528");
        document.documentElement.style.setProperty("--primary-text-color", "white");

    } else if (darkmode === true) {
        document.getElementById('moon').classList.remove('moon-2');
        document.getElementById('ray-1').style.display = 'inline';
        document.getElementById('ray-2').style.display = 'inline';
        document.getElementById('ray-3').style.display = 'inline';
        document.getElementById('ray-4').style.display = 'inline';
        document.getElementById('ray-5').style.display = 'inline';
        document.getElementById('ray-6').style.display = 'inline';
        document.getElementById('ray-7').style.display = 'inline';
        document.getElementById('ray-8').style.display = 'inline';

        document.getElementById('ray-1').classList.add('ray-animation-2');
        document.getElementById('ray-2').classList.add('ray-animation-2');
        document.getElementById('ray-3').classList.add('ray-animation-2');
        document.getElementById('ray-4').classList.add('ray-animation-2');
        document.getElementById('ray-5').classList.add('ray-animation-2');
        document.getElementById('ray-6').classList.add('ray-animation-2');
        document.getElementById('ray-7').classList.add('ray-animation-2');
        document.getElementById('ray-8').classList.add('ray-animation-2');

        setTimeout(() => {

            document.getElementById('ray-1').classList.remove('ray-animation-2');
            document.getElementById('ray-2').classList.remove('ray-animation-2');
            document.getElementById('ray-3').classList.remove('ray-animation-2');
            document.getElementById('ray-4').classList.remove('ray-animation-2');
            document.getElementById('ray-5').classList.remove('ray-animation-2');
            document.getElementById('ray-6').classList.remove('ray-animation-2');
            document.getElementById('ray-7').classList.remove('ray-animation-2');
            document.getElementById('ray-8').classList.remove('ray-animation-2');
        }, 400);

        document.getElementById('linkedin').style.backgroundImage = "url('./assets/icon/linkedin.png')";
        document.getElementById('behance').style.backgroundImage = "url('./assets/icon/behance.png')";
        document.getElementById('github').style.backgroundImage = "url('./assets/icon/github.png')";
        document.getElementById('facebook').style.backgroundImage = "url('./assets/icon/facebook.png')";

        document.documentElement.style.setProperty("--primary-background-color", "white");
        document.getElementById('moon').classList.remove('moon-2');
        document.getElementById('sun').style.backgroundColor = '#232528';
        document.documentElement.style.setProperty("--primary-text-color", "#232528");

        document.getElementById('contact-linkedin').style.backgroundImage = "url('./assets/icon/linkedin.png')";
        document.getElementById('contact-behance').style.backgroundImage = "url('./assets/icon/behance.png')";
        document.getElementById('contact-github').style.backgroundImage = "url('./assets/icon/github.png')";
        document.getElementById('contact-facebook').style.backgroundImage = "url('./assets/icon/facebook.png')";


        darkmode = false;
    }
}

function LinkedinHover() {
    if (document.querySelector('body').clientWidth > 800) {
        document.getElementById('linkedin-link').style.display = 'inline';
    }
}

function LinkedinMouseOut() {
    if (document.querySelector('body').clientWidth > 800) {
        document.getElementById('linkedin-link').style.display = 'none';
    }
}


function GithubHover() {
    if (document.querySelector('body').clientWidth > 800) {
        document.getElementById('github-link').style.display = 'inline';
    }
}

function GithubMouseOut() {
    document.getElementById('github-link').style.display = 'none';
}


function BehanceHover() {
    if (document.querySelector('body').clientWidth > 800) {
        document.getElementById('behance-link').style.display = 'inline';
    }
}

function BehanceMouseOut() {
    document.getElementById('behance-link').style.display = 'none';
}

function FacebookHover() {
    if (document.querySelector('body').clientWidth > 800) {
        document.getElementById('facebook-link').style.display = 'inline';
    }
}

function FacebookMouseOut() {
    document.getElementById('facebook-link').style.display = 'none';
}
function ShowDownloadCV(){
    document.getElementById('dowlonad-cv-alert-container').classList.remove('hide');
}

function DownloadCV(){
    document.getElementById('dowlonad-cv-alert-container').classList.add('hide');
}

function HideDownloadCV(){
    document.getElementById('dowlonad-cv-alert-container').classList.add('hide');
}

document.getElementById('').addEventListener('mouseover',()=>{
    document.getElementById('').classList.add
})