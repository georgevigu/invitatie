const da = document.querySelector(".da");
const nu = document.querySelector(".nu");
const refuz = document.querySelector(".refuz");
nu.addEventListener('click', (e) => { // add a click event listener
    refuz.style.display = "block";// do something when the button is clicked
    nu.style.display="none";
});
da.addEventListener('click', (e) => { // add a click event listener
    da.style.display="none";
    document.querySelector(".hi").src="ok.gif";
    document.querySelector(".hi").style.height="300px";
});