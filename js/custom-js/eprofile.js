const editProfileForm = document.querySelector("#edit-profile");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
// const location = document.querySelector('#location')
// const track = document.querySelector('#track')
const cv = document.querySelector("#cv");
const backend = document.querySelector("backend");
const frontend = document.querySelector("frontend");
const mobile = document.querySelector("mobile");
const design = document.querySelector("design");

const errorMessage = document.querySelector("#error-message");
const successMessage = document.querySelector("#success-message");

if (editProfileForm) {
  editProfileForm.addEventListener("submit", onsubmit);
}

function onsubmit(e) {
  e.preventDefault();

  if (!firstName.value || !lastName.value || !email.value) {
    console.log("erroe");
    errorMessage.innerHTML = "Please fill all the necessary details";
    if (errorMessage.style.display == "none") {
      errorMessage.style.display = "block";
    }
    setTimeout(function () {
      errorMessage.style.display = "none";
    }, 2000);
  } else {
    console.log("yeah");
  }
}

Filevalidation = () => {
  const fi = document.getElementById("file");
  // Check if any file is selected.
  if (fi.files.length > 0) {
    for (let i = 0; i <= fi.files.length - 1; i++) {
      const fsize = fi.files.item(i).size;
      const file = Math.round(fsize / 1024);
      // The size of the file.
      if (file >= 4096) {
        alert("File too Big, please select a file less than 4mb");
      } else if (file < 2048) {
        alert("File too small, please select a file greater than 2mb");
      } else {
        document.getElementById("size").innerHTML = "<b>" + file + "</b> KB";
      }
    }
  }
};

// <!DOCTYPE html>
// <html>

// <head>
//     <title>File Validation-1</title>
// </head>

// <body>
//     <p>
//         <input type="file"
//                id="file"
//                onchange="Filevalidation()" />
//     </p>

//     <p id="size"></p>
// </body>

// <script>
//     Filevalidation = () => {
//         const fi = document.getElementById('file');
//         // Check if any file is selected.
//         if (fi.files.length > 0) {
//             for (const i = 0; i <= fi.files.length - 1; i++) {

//                 const fsize = fi.files.item(i).size;
//                 const file = Math.round((fsize / 1024));
//                 // The size of the file.
//                 if (file >= 4096) {
//                     alert(
//                       "File too Big, please select a file less than 4mb");
//                 } else if (file < 2048) {
//                     alert(
//                       "File too small, please select a file greater than 2mb");
//                 } else {
//                     document.getElementById('size').innerHTML = '<b>'
//                     + file + '</b> KB';
//                 }
//             }
//         }
//     }
// </script>

// </html>
