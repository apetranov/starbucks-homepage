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
    });

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
    });

    var socialImpactDiv = document.getElementById("socialimpactdiv");
    var downArrow3 = document.getElementById("downarrow3");
    var upArrow3 = document.getElementById("uparrow3");
    var socialDetails = document.getElementById("social-impact");

    socialImpactDiv.addEventListener("click", function() {
        if(upArrow3.classList.contains("hidden")) {
            upArrow3.classList.remove("hidden");
            downArrow3.classList.add("hidden");
            socialDetails.classList.remove('hidden');
        } else {
            upArrow3.classList.add('hidden');
            downArrow3.classList.remove('hidden');
            socialDetails.classList.add('hidden');
        }
    });

    var businessPartnersDiv = document.getElementById("businesspartnersdiv");
    var downArrow4 = document.getElementById("downarrow4");
    var upArrow4 = document.getElementById("uparrow4");
    var partnersDetails = document.getElementById("partners");

    businessPartnersDiv.addEventListener("click", function() {
        if (upArrow4.classList.contains("hidden")) {
            upArrow4.classList.remove("hidden");
            downArrow4.classList.add("hidden");
            partnersDetails.classList.remove('hidden');
        } else {
            upArrow4.classList.add('hidden');
            downArrow4.classList.remove('hidden');
            partnersDetails.classList.add('hidden');
        }

    });


    var orderDiv = document.getElementById("orderdiv");
    var upArrow5 = document.getElementById("uparrow5");
    var downArrow5 = document.getElementById("downarrow5");
    var orderDetails = document.getElementById("order");

    orderDiv.addEventListener("click", function() {
        if (upArrow5.classList.contains('hidden')) {
            upArrow5.classList.remove('hidden');
            downArrow5.classList.add('hidden');
            orderDetails.classList.remove('hidden');
        } else {
            upArrow5.classList.add('hidden');
            downArrow5.classList.remove('hidden');
            orderDetails.classList.add('hidden');
        }
    });


});