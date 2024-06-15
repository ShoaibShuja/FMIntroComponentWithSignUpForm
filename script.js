const allInputs = document.getElementsByClassName("form-input");

const checkFunction = () => {
  let inputValues = Object.values(allInputs);
  document.getElementById("email-text").innerHTML = "Email Address cannot be empty";

  inputValues.forEach((input) => {
    
    input.parentElement.classList.remove("active");
    
    if (input.value == ""){

      input.parentElement.classList.add("active");

    }

    if (input.id == "email"
      && ((/\w+/).test(input.value))
      && !((/^\w+@gmail.com/).test(input.value)))
      {

      input.parentElement.classList.add("active");
      document.getElementById("email-text").innerHTML = "Looks like this is not an email";

    }
  })

  return true;
}