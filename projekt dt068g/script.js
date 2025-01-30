"use strict"

document.getElementById("booking-select").addEventListener("change", function () {
    const selectedOption = this.options[this.selectedIndex];


    const fromOut = selectedOption.getAttribute("data-from-out");
    const toOut = selectedOption.getAttribute("data-to-out");
    const dateOut = selectedOption.getAttribute("data-date-out");
    const timeOut = selectedOption.getAttribute("data-time-out");
    const fromHome = selectedOption.getAttribute("data-from-home");
    const toHome = selectedOption.getAttribute("data-to-home");
    const dateHome = selectedOption.getAttribute("data-date-home");
    const timeHome = selectedOption.getAttribute("data-time-home");


    document.getElementById("from-out").value = fromOut;
    document.getElementById("to-out").value = toOut;
    document.getElementById("date-out").value = dateOut;
    document.getElementById("time-out").value = timeOut;
    document.getElementById("from-home").value = fromHome;
    document.getElementById("to-home").value = toHome;
    document.getElementById("date-home").value = dateHome;
    document.getElementById("time-home").value = timeHome;
});



