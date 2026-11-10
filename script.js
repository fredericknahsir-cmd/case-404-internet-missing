console.log("Case 404 loaded successfully.");

const evidence = [];
let spinnerQuestioned = false;
let solved = false;

const initializeInvestigation = () => {
    const spinnerBtn = document.querySelector("#spinnerBtn");
    const spinnerReply = document.querySelector("#spinnerReply");
    const inspectionBtn = document.querySelector("#inspectBtn");
    const evidenceCount = document.querySelector("#evidenceCount");
    const evidenceList = document.querySelector("#evidenceList");
    const cookieBtn = document.querySelector("#cookieBtn");
    const cookieReply = document.querySelector("#cookieReply");
    const passwordBtn = document.querySelector("#passwordBtn");
    const passwordReply = document.querySelector("#passwordReply");
    const accuseBtn = document.querySelector("#accuseBtn");
    const suspectChoice = document.querySelector("#suspectChoice");
    const verdictText = document.querySelector("#verdictText");
    const caseFile = document.querySelector(".case-file");
    const restartBtn = document.querySelector("#restartBtn");

    function questionSpinner() {
        spinnerQuestioned = true;
        spinnerReply.textContent = "I was buffering all night. Ask the cookie.";
    }

    function addEvidence(clue) {
        if (evidence.includes(clue)) return;
        evidence.push(clue);
        const item = document.createElement("li");
        item.textContent = clue;
        evidenceList.appendChild(item);
        evidenceCount.textContent = "Evidence Collected: " + evidence.length + " / 3";
    }

    function inspectLog() {
        addEvidence("Log: Cookie accessed the router at 02:14.");
    }

    function questionCookie() {
        cookieReply.textContent = "I was just storing preferences. Nothing suspicious!";
        addEvidence("Statement: Cookie denies visiting the router.");
    }

    function questionPassword() {
        if (!spinnerQuestioned) {
            passwordReply.textContent = "Ask the spinner first. I need a memory jog.";
            return;
        }
        passwordReply.textContent = "I found a note: COOKIE changed the router password!";
        addEvidence("Note: Cookie changed the router password.");
    }

    function makeAccusation() {
        if (solved) return;
        if (evidence.length !== 3) {
            verdictText.textContent = "Collect all three clues first.";
            return;
        }
        if (suspectChoice.value === "cookie") {
            solved = true;
            caseFile.classList.add("solved");
            verdictText.textContent = "CASE SOLVED! Cookie changed the router password.";
        } else {
            verdictText.textContent = "Wrong suspect. Review the evidence and try again.";
        }
    }

    function restartInvestigation() {
        window.location.reload();
    }

    spinnerBtn.addEventListener("click", questionSpinner);
    inspectionBtn.addEventListener("click", inspectLog);
    cookieBtn.addEventListener("click", questionCookie);
    passwordBtn.addEventListener("click", questionPassword);
    accuseBtn.addEventListener("click", makeAccusation);
    restartBtn.addEventListener("click", restartInvestigation);
};

document.addEventListener("DOMContentLoaded", initializeInvestigation);