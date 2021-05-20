let claimBtn = document.getElementById("claim-btn");
claimBtn.addEventListener("click", function () {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let input3 = document.getElementById("input3");
    let input4 = document.getElementById("input4");
    let form1 = document.getElementById("form-1");
    let form2 = document.getElementById("form-2");
    let form3 = document.getElementById("form-3");
    let form4 = document.getElementById("form-4");
    let form5 = document.getElementById("form-5");
    let form6 = document.getElementById("form-6");

    if ((!input1.value) && (!input2.value) && (!input3.value) && (!input4.value)) {
        form2.classList.toggle("hide");
        form1.classList = "hide";
    }
    else {
        if (!input1.value) {
            form3.classList.toggle("hide");
            form1.classList = "hide";
        }

        if (!input2.value) {
            form4.classList.toggle("hide");
            form1.classList = "hide";
        }

        if (!input3.value) {
            form5.classList.toggle("hide");
            form1.classList = "hide";
        }

        if (!input4.value) {
            form6.classList.toggle("hide");
            form1.classList = "hide";
        }
    }

});