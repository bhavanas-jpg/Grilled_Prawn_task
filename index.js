let col = document.getElementById("collapse");
let content = document.getElementById("content")
let span = document.getElementById("symbol");
let i, id = 0;
let Name = document.getElementById("name"),
    Surname = document.getElementById("surname"),
    Email = document.getElementById("email"),
    user = document.getElementById("user"),
    isNameValid, isSurnameValid, isEmailValid;
let subBtn = document.getElementById("sub-btn");
let regExp = /^[a-zA-Z]{5,10}$/;
let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/**hamburger Menu */
let hamburger = document.getElementById('hamburger');
let navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
})

/**filter by recipe */
const recipe = () => {
    if (span.className === "plusSymbol") {
        span.classList.remove("plusSymbol");
        span.className = "minusSymbol";
    } else {
        span.className = "plusSymbol"
    }

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

/**newsletter part */
onFormSubmit = () => {
    if (Name.value && Surname.value && Email.value !== '') {
        let formData = readFormData();
        insertNewRecord(formData);
        resetForm();
    } else {
        alert("please fill the newsletter form  completely!!")
    }
}
/**reading the form values */
readFormData = () => {
    let formData = {
        name: Name.value,
        surname: Surname.value,
        email: email.value
    };
    return formData;
}

Name.addEventListener("keyup", function () {
    checkName(Name);
});

Surname.addEventListener("keyup", function () {
    isSurnameValid = checkSurname(Surname);
});

Email.addEventListener("keyup", function () {
    checkEmail(Email);
})


/**validating the form values */
function checkName(fname) {
    message = document.getElementById("userName");
    if (!fname.value) {
        setErrorFor(fname, message);
    } else if (regExp.test(fname.value)) {
        setSuccessFor(message);
    } else {
        setErrorFor(fname, message);
    }
}

function checkSurname(Surname) {
    message = document.getElementById("userSurname");
    if (!Surname.value) {
        setErrorFor(Surname, message);
    } else if (regExp.test(Surname.value)) {
        setSuccessFor(message);
    } else {
        setErrorFor(Surname, message);
    }
}

function checkEmail(Email) {
    message = document.getElementById("userEmail");
    if (!Email.value) {
        setErrorFor(Email, message);
    } else if (regEmail.test(Email.value)) {
        setSuccessFor(message);
    } else {
        setErrorFor(Email, message);

    }
}
/**validate error function */
const setErrorFor = (input, message) => {
    message.innerText = `enter a vaild ${input.name}`;
}
/**validate success function */
const setSuccessFor = (message) => {
    message.innerText = "";
}

/**add friend functionality in newsletter */
const insertNewRecord = data => {
    let parent = document.createElement("ul");
    parent.className = 'user';
    let listOne = document.createElement("li");
    listOne.innerHTML = `<label for="name">Name</label> <br>`
    let inputOne = document.createElement("input");
    inputOne.setAttribute('type', 'text');
    inputOne.setAttribute('value', data.name);
    listOne.appendChild(inputOne);
    parent.appendChild(listOne);

    let listTwo = document.createElement("li");
    listTwo.innerHTML = `<label for="name">SurName</label> <br>`
    let inputTwo = document.createElement("input");
    inputTwo.setAttribute('type', 'text');
    inputTwo.setAttribute('value', data.surname);
    listTwo.appendChild(inputTwo);
    parent.appendChild(listTwo);

    let listThree = document.createElement("li");
    listThree.innerHTML = `<label for="email">Email</label> <br>`
    let inputThree = document.createElement("input");
    inputThree.setAttribute('type', 'email');
    inputThree.setAttribute('value', data.email);
    listThree.appendChild(inputThree);
    parent.appendChild(listThree);

    let listFour = document.createElement("li");
    listFour.innerHTML = `<span class="icon"><i class="fa fa-trash"></i>Remove</span>`;
    listFour.setAttribute('id', "newsLetter" + (id++));
    listFour.setAttribute("onClick", "deleteRow(this.id)");
    parent.appendChild(listFour);
    user.appendChild(parent);
    user.className = "newsletter__form";
}

/**remove friend function */
function deleteRow(id) {
    parentElement = document.getElementById(id).parentNode;
    console.log(parentElement);
    parentElement.remove();
}
/**reset the form */
const resetForm = () => {
    Name.value = "";
    Surname.value = "";
    Email.value = "";
}