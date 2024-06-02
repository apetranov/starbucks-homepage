document.addEventListener("DOMContentLoaded", function() {
    var aboutUsDiv = document.getElementById("aboutusdiv");
    var downArrow1 = document.getElementById("downarrow1");
    var upArrow1 = document.getElementById("uparrow1");
    var aboutUsDetails = document.getElementById("about-us");

    aboutUsDiv.addEventListener("click", function() {
        if(upArrow1.classList.contains("hidden")) {
            upArrow1.classList.remove("hidden");
            downArrow1.classList.add("hidden");
            aboutUsDetails.classList.remove("hidden");
        } else {
            downArrow1.classList.remove("hidden");
            upArrow1.classList.add("hidden");
            aboutUsDetails.classList.add("hidden");
        }
    })

    var careersDiv = document.getElementById("careersdiv");
    var downArrow2 = document.getElementById("downarrow2");
    var upArrow2 = document.getElementById("uparrow2");
    var careersDetails = document.getElementById("careers");

    careersDiv.addEventListener("click", function() {
        if(upArrow2.classList.contains("hidden")) {
            upArrow2.classList.remove("hidden");
            downArrow2.classList.add("hidden");
            careersDetails.classList.remove("hidden");
        } else {
            downArrow2.classList.remove("hidden");
            upArrow2.classList.add("hidden");
            careersDetails.classList.add("hidden");
        }
    })

    


});