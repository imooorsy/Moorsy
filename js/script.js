var arrowDown = document.getElementById("arrowdown");
// var blogTitle = document.getElementById("blog-title");
// var blogArrowDown = document.getElementById("blogarrowdown")
var menuBtn = document.getElementById("menubtn")
var closeMenu = document.getElementById("closemenu")
var homeMenu = document.getElementById("homemenu")
var allMenu = document.getElementById("allmenu")
var homeImg = document.getElementById("home-img")



window.onscroll = function () {
    if(this.scrollY >= 315) {
        
    } else {
        blogTitle.classList.remove("animate");
    }
}

arrowDown.onclick = function () {
    window.scrollTo ({
        top : 615,
        behavior : "smooth",
    });
}
// blogArrowDown.onclick = function () {
//     window.scrollTo ({
//         top : 1230,
//         behavior : "smooth",
//     });
// }

// Typed Animation

var typed = new Typed(".typing",{
    strings : ["Software Engineer", "Front-End Developer","Back-End Developer","Mobile Developer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
})

var typed2 = new Typed(".third-typing",{
    strings : ["Do Something Great.", "Never Look Back.","Men Life is HARD.","Search For Peace."],
    typeSpeed : 150,
    backSpeed : 80,
    loop : true
})
var typed3 = new Typed(".qoute-typing",{
    strings : ["التسامح يُبني جسورًا من المحبة، فتسامح ","الإبداع يُضيء طريق النجاح، فابتكر ","العزيمة تتحدى الصعاب، فكن عازمًا ","الفهم يُصغي إلى الآخرين، فافهم ","الرضا يملأ القلب بالسكينة، فارضى ","الأمل يلهم الروح، فاحتفظ بالأمل ","المثابرة تحقق الأحلام، فكن مثابرًا ","الصدق يُبني الثقة، فكن صادقًا ","الاستماع يفتح أبواب الفهم، فاستمع ","الصمت يقول أكثر من الكلام، فكن صامتًا "],
    typeSpeed : 130,
    backDelay: 1500,
    backSpeed : 60,
    loop : true
})


menuBtn.onclick = function () {
    homeMenu.classList.add("active");
    allMenu.classList.add("active")
}

allMenu.onclick = closeMenu.onclick = function () {
    allMenu.classList.remove("active")
    homeMenu.classList.remove("active");
}

document.onload = function () {
    homeImg.classList.add("show")
}