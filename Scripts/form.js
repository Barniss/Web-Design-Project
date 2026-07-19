function submitConfirm() {
    var form = document.querySelector(".inquiry_form form");
    var message = document.getElementById("submitMessage");
    form.onsubmit = function (event) {
        event.preventDefault();
        alert("Thank you! Your inquiry has been received.");

    };
}