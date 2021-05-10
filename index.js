
let col = document.getElementById("collapse");
let content = document.getElementById("content")
let span = document.getElementById("symbol");
let i;
let id = 0;
let Name = document.getElementById("name"),
  Surname = document.getElementById("surname"),
  Email = document.getElementById("email"),
  user = document.getElementById("user");



   const recipe= () => {

    if(span.className ==="plusSymbol")
    {
      span.classList.remove("plusSymbol");
     span.className = "minusSymbol";
    }
    else{
      span.className = "plusSymbol"
    }

   
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }



onFormSubmit = () => {
  let formData = readFormData();
  insertNewRecord(formData);
}

readFormData = () => {
  let formData = {
    name: Name.value,
    surname: Surname.value,
    email: email.value
  };
  return formData;
}

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
  user.className = "form-2";
}

function deleteRow(id) {
  parentElement = document.getElementById(id).parentNode;
  console.log(parentElement);
  parentElement.remove();
}