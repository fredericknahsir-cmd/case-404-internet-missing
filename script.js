console.log("Case 404 loaded successfully.");

const spinnerBtn = document.querySelector("#spinnerBtn");
const spinnerReply = document.querySelector("#spinnerReply");
function questionSpinner() {
    spinnerReply.textContent =
    "I was buffering all night. Ask the cookie.";
}
spinnerBtn.addEventListener("click", questionSpinner);