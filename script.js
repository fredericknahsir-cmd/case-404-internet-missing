console.log("Case 404 loaded successfully.");

const spinnerBtn = document.querySelector("#spinnerBtn");
const spinnerReply = document.querySelector("#spinnerReply");
function questionSpinner() {
    spinnerReply.textContent =
    "I was buffering all night. Ask the cookie.";
}
spinnerBtn.addEventListener("click", questionSpinner);

const inspectionBtn = document.querySelector("#inspectBtn");
const evidenceCount = document.querySelector("#evidenceCount");
const evidenceList = document.querySelector("#evidenceList");
const evidence = [];
function addEvidence(clue) {
    if (evidence.includes(clue)) return;
    evidence.push(clue);
    const item = document.createElement("li");
    item.textContent = clue;
    evidenceList.appendChild(item);
    evidenceCount.textContent =
        "Evidence Collected: " + evidence.length + " / 3";
    
}
function inspectLog() {
    addEvidence("Log: Cookie accessed the router at 02:14.");
}
inspectionBtn.addEventListener("click", inspectLog);

const cookieBtn = document.querySelector("#cookieBtn");
const cookieReply = document.querySelector("#cookieReply");
function questionCookie() {
    cookieReply.textContent =
    "I was just storing preferences. Nothing suspicious!";
    addEvidence("Statement: Cookie denies visiting the router.");
}
cookieBtn.addEventListener("click", questionCookie);