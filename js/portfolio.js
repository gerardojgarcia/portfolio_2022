///


const homeBtn  = document.getElementById("home-btn")
const portBtn = document.getElementById("port-btn")
const expBtn = document.getElementById("exp-btn")
const contactBtn = document.getElementById("contact-btn")
const homeEl = document.getElementById("home")
const portEl = document.getElementById("portfolio")
const expEl = document.getElementById("experience")


//next/back button portfolio constants
const nextBtn = document.getElementById("port-next")
const backBtn = document.getElementById("port-back")
const portBox = document.getElementById("portfolio-box")


//up/down experience buttons

const upBtn = document.getElementById("exp-up")
const downBtn = document.getElementById('exp-down')
const expBox = document.getElementById('experience-box')


// Switch between pages with event listeners



homeBtn.addEventListener("click", function(){

    


       
        homeEl.classList.toggle("hidden")



    


    portEl.classList.add('hidden')

    expEl.classList.add("hidden")
  

})



portBtn.addEventListener("click", function(){

 

    console.log('i was clicked')


    portEl.classList.toggle('hidden')


    homeEl.classList.add('hidden')

    expEl.classList.add('hidden')


})

expBtn.addEventListener("click", function(){

    

   expEl.classList.toggle('hidden')
   // expEl.classList.toggle('transform')

    



    

    portEl.classList.add('hidden')


    homeEl.classList.add('hidden')


})



//// portfolio scroll buttons left/right


nextBtn.addEventListener("click", function(){
    console.log('next button clicked')


    portBox.scrollLeft += 430




})


backBtn.addEventListener('click', function() {
    console.log('back button clicked')

    portBox.scrollLeft -= 430
})



//// experience up/down even listeners


upBtn.addEventListener("click", function(){
    expBox.scrollTop -= 500
})


downBtn.addEventListener("click", function() {
    expBox.scrollTop += 500
})



/// footer contact form



const footerBtn = document.getElementById('footer-btn')


footerBtn.addEventListener('click', ()=> {

    const footerContactEl = document.getElementById('contact-modal')



    footerContactEl.classList.toggle('hidden')
    footerContactEl.classList.toggle('display')
    console.log('i was clicked')
})