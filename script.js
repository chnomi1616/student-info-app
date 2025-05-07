function saveData() {
    // Get values from inputs
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let city = document.getElementById("city").value;
  
    // Create an object
    let student = {
      name: name,
      age: age,
      city: city
    };
  
    // Display data
    let output = document.getElementById("output");
    output.innerHTML = `
      <h3>Student Info</h3>
      Name: ${student.name} <br>
      Age: ${student.age} <br>
      City: ${student.city}
    `;
  }
  
  function clearData() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("output").innerHTML = "";
  }
  