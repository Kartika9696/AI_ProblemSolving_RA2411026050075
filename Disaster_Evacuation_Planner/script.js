// Game State: [Civilians on Left, Criminals on Left, Boat Position (0=Left, 1=Right)]
let state = [3, 3, 0]; 

function updateUI() {
    document.getElementById('left-people').innerText = "👨‍👩‍👧‍👦".repeat(state[0]) + "🦹".repeat(state[1]);
    document.getElementById('right-people').innerText = "👨‍👩‍👧‍👦".repeat(3 - state[0]) + "🦹".repeat(3 - state[1]);
    document.getElementById('river').innerText = state[2] === 0 ? "BOAT ->" : "<- BOAT";
}

function isSafe(c, r) {
    if (c < 0 || r < 0 || c > 3 || r > 3) return false;
    if (c > 0 && c < r) return false; // Left bank check
    let rc = 3 - c, rr = 3 - r;
    if (rc > 0 && rc < rr) return false; // Right bank check
    return true;
}

function makeMove() {
    let moveCiv = document.getElementById('move-civ').checked ? 1 : 0;
    let moveCri = document.getElementById('move-cri').checked ? 1 : 0;
    let total = moveCiv + moveCri;

    if (total === 0 || total > 2) { alert("Select 1 or 2 people!"); return; }

    let newState = [...state];
    if (state[2] === 0) { // Moving Left to Right
        newState[0] -= moveCiv; newState[1] -= moveCri; newState[2] = 1;
    } else { // Moving Right to Left
        newState[0] += moveCiv; newState[1] += moveCri; newState[2] = 0;
    }

    if (isSafe(newState[0], newState[1])) {
        state = newState;
        updateUI();
        if (state[0] === 0 && state[1] === 0) alert("Mission Accomplished! Everyone is safe.");
    } else {
        alert("Invalid Move! Criminals outnumber civilians.");
    }
}

function getHint() {
    document.getElementById('hint-box').innerText = "AI Hint: Try moving 1 Civilian and 1 Criminal across first.";
}

updateUI();
