
let col = document.getElementsByClassName("collapse");
let span = document.getElementById("symbol");
let i;
let id = 0;
let Name = document.getElementById("name"),
  Surname = document.getElementById("surname"),
  Email = document.getElementById("email"),
  user = document.getElementById("user");


for (i = 0; i < col.length; ++i) {
  col[i].addEventListener("click", function () {

    if(span.className ==="plusSymbol")
    {
      span.classList.remove("plusSymbol");
     span.className = "minusSymbol";
    }
    else{
      span.className = "plusSymbol"
    }

    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
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
  let li = document.createElement("li");
  li.innerHTML = `<label for="name">Name</label> <br>`
  let input = document.createElement("input");
  input.setAttribute('type', 'text');
  input.setAttribute('value', data.name);
  li.appendChild(input);
  parent.appendChild(li);

  let li1 = document.createElement("li");
  li1.innerHTML = `<label for="name">SurName</label> <br>`
  let input1 = document.createElement("input");
  input1.setAttribute('type', 'text');
  input1.setAttribute('value', data.surname);
  li1.appendChild(input1);
  parent.appendChild(li1);

  let li2 = document.createElement("li");
  li2.innerHTML = `<label for="email">Email</label> <br>`
  let input2 = document.createElement("input");
  input2.setAttribute('type', 'email');
  input2.setAttribute('value', data.email);
  li2.appendChild(input2);
  parent.appendChild(li2);

  let li3 = document.createElement("li");
  li3.innerHTML = `<span class="icon"><i class="fa fa-trash"></i>Remove</span>`;
  li3.setAttribute('id', "newsLetter" + (id++));
  li3.setAttribute("onClick", "deleteRow(this.id)");
  parent.appendChild(li3);
  user.appendChild(parent);
  user.className = "form-2";
}

function deleteRow(id) {
  parentElement = document.getElementById(id).parentNode;
  console.log(parentElement);
  parentElement.remove();
}