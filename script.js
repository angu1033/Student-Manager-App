const students =[]

function addStudent(){
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;    
    const grade = document.getElementById("grade").value;

    if(!name || !age || !grade){
        alert("Please fill all fields.");
        return;
    }
    if (age <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    const student={name, age, grade};
    students.push(student);
    displayStudents();
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
}

function displayStudents() {
    const tbody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; // clear previous entries
  
    students.forEach((student, index) => {
      const row = tbody.insertRow();
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
      `;
    });
  }
  
function searchStudent(){
    const searchName = document.getElementById('searchName').value.trim().toLowerCase();
    const found = students.find(student => student.name.toLowerCase()===searchName);

    if (found){
        alert(`Found:${found.name}, Age: ${found.age}, Grade: ${found.grade}`);
    } else{
        alert("Student not found.")
    }

}