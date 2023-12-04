let isLoggedIn = false;

let burger = document.getElementById('burger');
let smallSideNav = document.getElementById('small-side-nav');
let bigSideNav = document.getElementById('big-side-nav');
let categoryToMerge = document.getElementById('category');
let mainContainer = document.getElementById('main-cont')
burger.addEventListener('click', function() {
    if (smallSideNav.classList.contains('hidden')){
        smallSideNav.classList.remove('hidden');
        mainContainer.classList.add('small-margin');
    } else {
        smallSideNav.classList.add('hidden');
        mainContainer.classList.remove('small-margin');
    }
    if (bigSideNav.classList.contains('hidden')) {
        bigSideNav.classList.remove('hidden');
        mainContainer.classList.add('big-margin');
    } else {
        bigSideNav.classList.add('hidden');
        mainContainer.classList.remove('big-margin');
    }
});

let showMorePlaylists = document.getElementById("playlist-show-more");
let showLessPlaylist = document.getElementById("playlist-show-less");
let hiddenPlaylists = document.querySelectorAll(".playlisthide");

showMorePlaylists.addEventListener('click', function() {
    hiddenPlaylists.forEach((value) => value.classList.remove('hidden'));
    showMorePlaylists.classList.add('hidden');
});
showLessPlaylist.addEventListener('click', function() {
    hiddenPlaylists.forEach((value) => value.classList.add('hidden'));
    showMorePlaylists.classList.remove('hidden');
});

let showMoreSub = document.getElementById('show-more-sub');
let showLessSUb = document.getElementById('show-less-sub');
let hiddenSubs = document.querySelectorAll('.subhide');

showMoreSub.addEventListener('click', function() {
    hiddenSubs.forEach( value => value.classList.remove('hidden'));
    showMoreSub.classList.add('hidden');
});

showLessSUb.addEventListener('click', function() {
    hiddenSubs.forEach( value => value.classList.add('hidden'));
    showMoreSub.classList.remove('hidden');
});

let authForm = document.getElementById("authenticate");
let profilePicture = document.getElementById("pfp");

profilePicture.addEventListener("click", function() {
    if (!isLoggedIn) {
        authForm.classList.contains('hidden') ? authForm.classList.remove('hidden') : authForm.classList.add('hidden');
    } else { 
        isLoggedIn = false;
        localStorage.removeItem('email');
        localStorage.removeItem('profileImage');
        profilePicture.style.backgroundImage = 'url("../assets/images/pfp.jpg")';
    }
});




let submitButton = document.getElementsByClassName("authenticate__form__button")[0];
submitButton.disabled = true;
let emailInput = document.getElementById("emailInput");
let imageInput = document.getElementById("imgInput");
let emailValidation = document.getElementById("emailValidation");
let imageValidation = document.getElementById('imageValidation');
let isMailValid = false;
let isImageValid = false;
emailInput.addEventListener('change', function() {

    const email =emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(email)) {
        isMailValid = true;
        isImageValid ? submitButton.disabled = false : submitButton.disabled = true;
        emailInput.style.border = " 0.2px solid #6D9886";
        emailValidation.classList.add('hidden');
    } else {
        emailInput.style.border = "0.2px solid red";
        isMailValid = false;
        submitButton.disabled = true;
        emailValidation.classList.remove('hidden');
    }
});

imageInput.addEventListener('change', function() {
    const link = imageInput.value;
    const linkPattern = /^(https?|http|ftp):\/\/[^\s/$.?#].[^\s]*$/;

    if (linkPattern.test(link)) {
        isImageValid = true;
        isMailValid ? submitButton.disabled = false : submitButton.disabled = true;
        imageInput.style.border = " 0.2px solid #6D9886";
        imageValidation.classList.add('hidden');
    } else {
        isImageValid = false;
        submitButton.disabled = true;
        imageInput.style.border = "0.2px solid red";
        imageValidation.classList.remove('hidden');
    }
});

let form = document.getElementById("authenticateForm");
form.addEventListener('submit', function() {
    localStorage.setItem("profileImage", imageInput.value);
    localStorage.setItem("email", emailInput.value);
});

function setUser() {
    const link = localStorage.getItem("profileImage");
    if (link != null) {
        profilePicture.style.backgroundImage = `url("${link}")`;
        isLoggedIn = true;
    } else {
        isLoggedIn = false;
    }
}

setUser();