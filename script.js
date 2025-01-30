const abc = document.getElementById("abc");
const body = document.querySelector('body');
abc.addEventListener("click", () => {

    if (body.classList.toggle("dark-mode")) {
        abc.textContent = "Light Mode";
    } else {
        abc.textContent = "Dark Mode";
    }
});
const oldi = document.getElementById("oldiga");
oldi.addEventListener("click", () => {
    body.classList.toggle('on');
});
const yonga = document.getElementById("yonga")
yonga.addEventListener("click", () => {
    body.classList.toggle('positionleft')
});
const past = document.getElementById("past")
past.addEventListener("click", () => {
    body.classList.toggle('positionbottom')
});
const tepaga = document.getElementById("tepaga")
tepaga.addEventListener("click", () => {
    body.classList.toggle('positiontop')
});