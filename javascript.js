function input(e){
    //let text = document.querySelector(`input[type="text"]`);
    let form = document.querySelector("form");
    let firstName= document.getElementById("first");
    let lastName= document.getElementById("last");
    let email = document.querySelector(`input[type="email"]`);
    let password = document.querySelector(`input[type="password"]`);
    let firstNameMessage = document.getElementById("firstNameMessage");
    let lastNameMessage = document.getElementById("lastNameMessage");
    let emailMessage = document.getElementById("emailMessage");
    let passwordMessage = document.getElementById("passwordMessage");
    let message = document.getElementsByClassName("image");

    if(firstName.value.trim() == "" && !firstNameMessage){
        e.preventDefault();
        let para = document.createElement("p");
        para.setAttribute("id", "firstNameMessage");
        para.setAttribute("class", "message");
        para.textContent= "First Name cannot be empty";
        form.insertBefore(para, form[1]);
        let img = document.createElement("img");
        img.src = "images/icon-error.svg";
        form.appendChild(img);
        img.setAttribute("id", "image1");
        img.setAttribute("class", "image");
        let image1= document.getElementById("image1");
    } else if(firstName.value.trim() !== "" && firstNameMessage){
        form.removeChild(firstNameMessage);
        form.removeChild(image1);
    }

    if(lastName.value.trim() == "" && !lastNameMessage) {
        e.preventDefault();
        let para = document.createElement("p");
        para.setAttribute("id", "lastNameMessage");
        para.setAttribute("class", "message");
        para.textContent= "Last Name cannot be empty";
        form.insertBefore(para, form[2]);
        let img = document.createElement("img");
        img.src = "images/icon-error.svg";
        form.appendChild(img);
        img.setAttribute("id", "image2");
        img.setAttribute("class", "image");
        let image2= document.getElementById("image2");
    }else if(lastName.value.trim() !== "" && lastNameMessage){
        form.removeChild(lastNameMessage);
        form.removeChild(image2);
    }

    let trim = email.value.trim();
    let validation = /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[a-z]{2,}$/.test(trim);

    if(trim=="" && !validation && !emailMessage){
        e.preventDefault();
        let para = document.createElement("p");
        para.setAttribute("id", "emailMessage");
        para.setAttribute("class", "message");
        para.textContent= "Looks like this is not an email";
        form.insertBefore(para, form[3]);
        let img = document.createElement("img");
        img.src = "images/icon-error.svg";
        form.appendChild(img);
        img.setAttribute("id", "image3");
        img.setAttribute("class", "image");
        let image3= document.getElementById("image3");
    }else if(trim !== "" && validation && emailMessage){
        form.removeChild(emailMessage);
        form.removeChild(image3);
    }

    if(password.value.trim() == "" && !passwordMessage){
        e.preventDefault();
        let para = document.createElement("p");
        para.setAttribute("id", "passwordMessage");
        para.setAttribute("class", "message");
        para.textContent= "Password cannot be empty";
        form.insertBefore(para, form[4]);
        let img = document.createElement("img");
        img.src = "images/icon-error.svg";
        form.appendChild(img);
        img.setAttribute("id", "image4");
        img.setAttribute("class", "image");
        let image4= document.getElementById("image4");
    }else if(password.value.trim() !== "" && passwordMessage){
        form.removeChild(passwordMessage);
        form.removeChild(image4);
    }

    /*
    else{
        if(firstNameMessage){
        form.removeChild(firstNameMessage);}

        if(lastNameMessage){
        form.removeChild(lastNameMessage);}

        if(emailMessage){
        form.removeChild(emailMessage);}

        if(passwordMessage){
        form.removeChild(passwordMessage);}
    }*/
}
/*
function errormsg(){

    let form = document.querySelector("form");
    let firstNameMessage = document.getElementById("firstNameMessage");
    let lastNameMessage = document.getElementById("lastNameMessage");
    let emailMessage = document.getElementById("emailMessage");
    let passwordMessage = document.getElementById("passwordMessage");

    if(firstNameMessage){
    form.removeChild(firstNameMessage);}

    if(lastNameMessage){
    form.removeChild(lastNameMessage);}

    if(emailMessage){
    form.removeChild(emailMessage);}

    if(passwordMessage){
    form.removeChild(passwordMessage);}
}*/

let submit = document.querySelector(`input[type="submit"]`);

submit.addEventListener("click", function(e){
    input(e);
    //errormsg();
},false);