// Event Listener

document.getElementById("btn").addEventListener("click", calculate);

// Function
function calculate() {
  // Input
  let cs1 = +document.getElementById("cs1-in").value;
  let sp1 = +document.getElementById("sp1-in").value;
  let sp2 = +document.getElementById("sp2-in").value;
  let cs2 = +document.getElementById("cs2-in").value;
  let project = +document.getElementById("project-in").value;

  // Process
  let mark = (cs1 + sp1 + sp2 + cs2 + project) / 5;

  // Output
  document.getElementById("grade").innerHTML = mark;
}
