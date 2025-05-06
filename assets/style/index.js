function getData(event) {
  event.preventDefault();

  let name = document.getElementById("exampleFormControlInput1").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let subject = document.getElementById("subject").value;
  let massage = document.getElementById("massage").value;
  alert(`${name} ${email} ${phoneNumber} ${subject} ${massage}`);
}
