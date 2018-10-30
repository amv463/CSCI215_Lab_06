
document.getElementById('name').onkeyup = function(){
    var name = document.getElementById('name');

    var regExp = new RegExp('<');

    if(regExp.test(document.getElementById('name').value)) {
        name.style.backgroundColor = 'red';
    } else {
        name.style.backgroundColor = 'white';
    }
};

function checkAge() {
    var age = document.getElementById('age');

    var regExp = new RegExp('.');


    if(regExp.test(document.getElementById('age').value) || dcoument.getElementById('age').value > 99) {
       age.style.backgroundColor = 'red';
    } else {
       age.style.backgroundColor = 'white';
    }
}

function checkEmail(email) {
    var regExp = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');
    return regExp.test(email);

}

function validate() {
    var sub = document.getElementbyId('Subscribe');

    sub.addEventListener('click', fucntion() {
        document.getElementById('email');
        checkEmail(email);

        if (email == true) {
            alert("Ajax has been made");

        } else {
            alert("Subscription could not be processed. Please check to see if your information is correct");
        }
    })
}