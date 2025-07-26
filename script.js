function getFormvalue() {
  const form = document.querySelector("#form1"); // ✅ Fixed: ID spelling ("from1" ➝ "form1")

  form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const fname = document.querySelector(".firstname").value; // ✅ Fixed: "querySeelector" ➝ "querySelector"
    const lname = document.querySelector(".lastname").value;  // ✅ Fixed: "documennt" ➝ "document"

    const fullname = `${fname} ${lname}`; // ✅ Added space between first and last name

    alert(`Full name = ${fullname}`);
  });
}
