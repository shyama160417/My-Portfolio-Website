const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})
const fadeinElements = document.querySelectorAll(".fade_in")
fadeinElements.forEach(el=> observer.observe(el))

function displaymenubar(){
    const menubar = document.querySelector('.menubar')
    if(menubar.style.display == 'none')
        menubar.style.display = 'flex'
        else
        menubar.style.display = 'none'
}

