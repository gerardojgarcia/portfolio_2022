const homeBtn = document.getElementById("home-btn");
const portBtn = document.getElementById("port-btn");
const expBtn = document.getElementById("exp-btn");
const contactBtn = document.getElementById("contact-btn");
const homeEl = document.getElementById("home");
const portEl = document.getElementById("portfolio");
const expEl = document.getElementById("experience");
// Switch between pages with
///function switchPage(page){
///if(page.classList.contains('hidden') == true) {
// console.log('Already Hidden')
// } else 
// page.classList.add('hidden')
//}
///page.classList.toggle('hidden')
/// event listeners
homeBtn.addEventListener("click", function() {
    homeEl.classList.toggle("hidden");
    portEl.classList.add("hidden");
    expEl.classList.add("hidden");
});
portBtn.addEventListener("click", function() {
    console.log("i was clicked");
    portEl.classList.toggle("hidden");
    homeEl.classList.add("hidden");
    expEl.classList.add("hidden");
});
expBtn.addEventListener("click", function() {
    expEl.classList.toggle("hidden");
    portEl.classList.add("hidden");
    homeEl.classList.add("hidden");
});

//# sourceMappingURL=index.d4fd755d.js.map
