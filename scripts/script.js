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


let loginPageButton = document.getElementById("goToLogin");

loginPageButton.addEventListener("click", () => {
    var isLoggedIn = localStorage.getItem("isLoggedIn");

    if(isLoggedIn) {
        if (confirm("Do you really want to log out? ")) {
            let pfp = document.getElementById("pfp");
            pfp.style.backgroundImage = 'url("../assets/images/pfp.jpg")';
            localStorage.clear();
        } else {
            
        }
    } else {
        window.location.assign("../authentification.html");
    }
});


function setPfp() {
    let uri = localStorage.getItem("pfp");
    let pfp = document.getElementById("pfp");
    pfp.style.backgroundImage = uri;
} 

setPfp();
