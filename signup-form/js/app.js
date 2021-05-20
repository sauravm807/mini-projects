let claimBtn = document.getElementById("claim-btn");
claimBtn.addEventListener("click", function (e) {
    
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let input3 = document.getElementById("input3");
    let input4 = document.getElementById("input4");
    let span1 = document.querySelector("#input1 + span");
    let span2 = document.querySelector("#input2 + span");
    let span3 = document.querySelector("#input3 + span");
    let span4 = document.querySelector("#input4 + span");

    input1.style.borderColor = "hsl(246, 25%, 77%)";
    input2.style.borderColor = "hsl(246, 25%, 77%)";
    input3.style.borderColor = "hsl(246, 25%, 77%)";
    input4.style.borderColor = "hsl(246, 25%, 77%)";
    


    if (!input4.value) {
        span4.classList.remove("hide");
        input4.removeAttribute("placeholder");
        input4.style.borderColor = "hsl(0, 100%, 74%)";
    } else {
        span4.classList.add("hide");
    }

    if (!input1.value) {
        span1.classList.remove("hide");
        input1.removeAttribute("placeholder");
        input1.style.borderColor = "hsl(0, 100%, 74%)";

    } else {
        span1.classList.add("hide");
    }

    if (!input2.value) {
        span2.classList.remove("hide");
        input2.removeAttribute("placeholder");
        input2.style.borderColor = "hsl(0, 100%, 74%)";

    } else {
        span2.classList.add("hide");
    }

    if (!input3.value) {
        span3.classList.remove("hide");
        input3.setAttribute("placeholder", "email@example.com");
        input3.style.borderColor = "hsl(0, 100%, 74%)";
        // let placeholder = document.querySelector("#input3::placeholder");
        // placeholder.style.color = "red";
    } else {
        span3.classList.add("hide");
    }

});