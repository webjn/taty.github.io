// Correct password
const correctPassword = "##1Taty1##@2024";

// Function to check the entered password
function checkPassword() {
  const passwordInput = document.getElementById("passwordInput").value;
  if (passwordInput === correctPassword) {
    // If password is correct, show the content
    document.getElementById("passwordPrompt").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    // If password is incorrect, show an alert
    alert("Incorrect password! Please try again.");
  }
}
