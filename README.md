# Max Profit Algorithm 🏗️💰

A specialized Node.js script to calculate the optimal mix of properties (Theatres, Pubs, Commercial Parks) to build within a given time limit to maximize total earnings.

📋 **Problem Overview**

The goal is to select a combination of buildings that fits within n time units and generates the highest total profit. The algorithm is designed to handle edge cases where multiple valid solutions exist for the same maximum profit.

**Properties & Constraints**

| Property            | Build Time | Earning Rate ($/unit) |
|---------------------|------------|-----------------------|
|Theatre (T)          | 5 units    | $1500                 |
| Pub (P)             | 4 units    | $1000                 |
| Commercial Park (C) | 10 units   | $3000                 |

Earnings are calculated based on the operational time remaining after construction.

🚀 **How to Run**

**Prerequisites:** Ensure Node.js is installed on your machine.

**Navigate to the folder:**
```
cd max_profit_algo
```

**Run the Script:**
```
node index.js
```

🧪 **Special Test Case (Time Unit: 49)**

For Time Unit: 49, the system correctly identifies that there are multiple distinct building combinations that yield the exact same top earnings.

**Expected Output:**

```
Time Unit: 49
Earnings: $324000
Solutions:
T: 8 P: 2 C: 0
T: 9 P: 0 C: 0
```


**Logic Explanation**

`Solution 1 (8T, 2P, 0C): * Construction: 8 Theatres ($8 \times 5 = 40$ units) + 2 Pubs ($2 \times 4 = 8$ units).`

`Total Time Used: 48 units.`

`Solution 2 (9T, 0P, 0C): * Construction: 9 Theatres ($9 \times 5 = 45$ units).`

`Total Time Used: 45 units.`

`Result: Both configurations result in the exact same calculated profit of $324,000, demonstrating the algorithm's ability to find all optimal local maxima.`

🛠️ **Implementation Details**

Iteration: The script iterates through all mathematically possible combinations of Commercial Parks, Theatres, and Pubs that fit within the time limit n.

Efficiency Prioritization: When calculating earnings for a specific combination, buildings are constructed in order of their "Earnings Per Unit of Build Time" efficiency (Theatre/Park -> Pub) to maximize the time they are operational.

Multi-Solution Tracking: Unlike standard algorithms that stop at the first maximum, this implementation maintains an array of solutions. If a new combination matches the current maximum profit, it is appended to the list.
