function validateForm() {
    let a = document.forms["myForm"]["user"].value;
    let b = document.forms["myForm"]["email"].value;
    let c = document.forms["myForm"]["contact-number"].value;
    let d = document.forms["myForm"]["address"].value;
    let e = document.forms["myForm"]["inquiry"].value;

    if (a == "" || b == "" || c == "" || d == "" || e == "") {
      alert("All fields must be filled out");
      return false;
    }
  }

function clearForm() {
    document.getElementById("myForm").reset();
}