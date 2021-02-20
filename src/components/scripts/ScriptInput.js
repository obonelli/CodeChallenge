/* Interactive text input */

var toggleInputContainer = function (input) {
    if (input.value !== "") {
        input.classList.add('filled');
    } else {
        input.classList.remove('filled');
    }
}

var labels = document.querySelectorAll('.label');
for (var i = 0; i < labels.length; i++) {
    labels[i].addEventListener('click', function () {
        this.previousElementSibling.focus();
    });
}

window.addEventListener("load", function () {
    var inputs = document.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
        //console.log('looped');
        inputs[i].addEventListener('keyup', function () {
            toggleInputContainer(this);
        });
        toggleInputContainer(inputs[i]);
    }
});