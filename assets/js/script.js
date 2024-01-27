const nav = document.querySelector('.nav');
const backToTop = document.getElementById("back");

// make the nav scroll to the section smooth
nav.addEventListener('click', function(e){
    e.preventDefault();

    // 為什麼if 進不去呢? 明明應該是出現true才對
    if(e.target.classList.contains('menu-a')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});


// Control whether to show back to the top button
window.addEventListener("scroll", function() {
    if(this.window.scrollY > 200) {
        backToTop.className = "back-top show";
    } else {
        backToTop.className = "back-top hide";
    }
});

// Fire the button when click
backToTop.addEventListener("click", function() {
    document.querySelector("#header").scrollIntoView({behavior: 'smooth'});
})

