# AI Problem Solving - Disaster Evacuation Planner
**Registration Number:** RA2411026050075

**Live Interactive Website:** https://kartika9696.github.io/AI_ProblemSolving_RA2411026050075/Disaster_Evacuation_Planner/

---

## 1. Problem Description
This project is an AI-based evacuation planner based on the Missionaries and Cannibals logic. 
- **Goal:** Move 3 Civilians and 3 Criminals from the Left Bank to the Right Bank.
- **Constraints:** Criminals can never outnumber civilians on either bank.
- **Boat:** Can carry a maximum of 2 people and a minimum of 1.

## 2. Algorithms Used
- **State Space Formulation:** Each state is defined as $(C, R, B)$ where $C$ is civilians on the left, $R$ is criminals on the left, and $B$ is the boat position.
- **Search Strategy:** Breadth-First Search (BFS) is used to calculate the "Optimal Next Move" whenever the user requests a hint.

## 3. Execution Steps
1. Click the Live Website link above.
2. Select 1 or 2 passengers using the checkboxes.
3. Click **'Cross River'** to move the boat.
4. If you make an illegal move, the system will alert you.
5. Click **'Get AI Hint'** if you are stuck to see the best next step.

## 4. Sample Outputs
- **Successful Move:** Boat moves to the opposite side and updates character icons.
- **Game Over/Invalid Move:** Alert saying "Invalid Move! Criminals outnumber civilians."
- **Win Condition:** Alert saying "Mission Accomplished! Everyone is safe."
