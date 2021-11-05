const names = document.getElementsByClassName('cmc_name');
const closeButton = document.getElementsByClassName('profile__footer__closeButton')[0];
const profile = document.getElementsByClassName('profile')[0];

for (let i = 0; i < names.length; i++) {
    names[i].addEventListener('click', userInfo);
}
closeButton.addEventListener('click', userInfo);

function userInfo() {
    profile.classList.toggle('d-none');
}