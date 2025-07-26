function getFormvalue() {
  const form = document.querySelector("form1"); // Corrected ID spelling
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const fname = document.querySelector(".firstname").value;
    const lname = document.querySelector(".lastname").value;

    const fullname = `${fname}  ${lname}`; // Added space between names
    alert(`Full name = ${fullname}`);
  });
}
