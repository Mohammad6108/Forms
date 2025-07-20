document.getElementById("showJsonBtn").addEventListener("click", function () {
  const person = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    course: document.getElementById("course").value,
    section: document.getElementById("section").value,
    role: document.getElementById("role").value
  };

  console.log("Person object:");
  console.log(person);

  console.log("JSON format:");
  console.log(JSON.stringify(person, null, 2));
});
