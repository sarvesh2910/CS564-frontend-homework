// Add your code here
const inputForm = document.getElementById("inputForm");

const printForm = (event) => {
  event.preventDefault();
  const fullname = inputForm.elements[0].value;
  const email = inputForm.elements[1].value;
  const registrationStatus = inputForm.elements[2].value;
  let coursesList = document.querySelector("#plCourse").checked
    ? "Programming languages;"
    : "";
  if (document.querySelector("#osCourse").checked)
    coursesList += "Operating Systems;";
  if (document.querySelector("#fsCourse").checked)
    coursesList += "Full Stack Web Development";
  coursesList = coursesList.split(";").join(", ");

  const anythingElse = inputForm.elements[7].value;
  console.group("============== Form Submission ==============");
  console.log(`Full Name: ${fullname}`);
  console.log(`Email: ${email}`);
  console.log(`Registration Status: ${registrationStatus}`);
  console.log(`Courses Registered: ${coursesList}`);
  console.log(`Anything else: ${anythingElse}`);
  console.groupEnd();
};
inputForm.addEventListener("submit", printForm);
