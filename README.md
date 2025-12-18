# Water Tank Problem - Frontend Solution

This repository contains a solution for the "Water Tank Problem" (a variation of the *Trapping Rain Water* algorithm). It calculates the total units of water that can be stored between blocks of varying heights and visualizes the result using **SVG generation**.

## Assignment Overview

The goal of this assignment is to compute the units of water stored in-between blocks given an array of integers representing block heights.

* **Input:** An array of integers (e.g., `[0,4,0,0,0,6,0,6,4,0]`)
* **Output:** Total units of water (e.g., `18 Units`)
* **Constraint:** `n` (block height) is always greater than -1.

## Features

* **Vanilla JavaScript:** Built without any frameworks (React, Angular, Vue) as per requirements.
* **Dynamic SVG Visualization:** Renders the solution using Scalable Vector Graphics (SVG) rather than an HTML table, allowing for a cleaner and more accurate visual representation.
* **Interactive Input:** Users can input custom arrays to test different scenarios.
* **Responsive Logic:** Validates input and updates calculations instantly.

## Technologies Used

* **HTML5:** Structure and layout.
* **CSS3:** Styling for the UI and SVG elements.
* **JavaScript (ES6):** Algorithmic logic and DOM manipulation.

## How to Run

Since this solution uses Vanilla JavaScript, no build process or package manager (npm/yarn) is required.

1.  Clone this repository:
    ```bash
    git clone <your-repository-url>
    ```
2.  Navigate to the project folder.
3.  Open `index.html` in any modern web browser (Chrome, Firefox, Safari).

## Algorithmic Approach

The solution utilizes an $O(n)$ time complexity approach:

1.  **Left Max Calculation:** We iterate through the array to find the maximum wall height to the *left* of every index.
2.  **Right Max Calculation:** We iterate backwards to find the maximum wall height to the *right* of every index.
3.  **Water Level Determination:** The water level at any specific index is determined by the shorter of the two surrounding walls: `min(LeftMax, RightMax)`.
4.  **Volume Calculation:** The water volume at that index is `WaterLevel - BlockHeight`.

## Test Case Validation

Based on the assignment document:

* **Input:** `[0,4,0,0,0,6,0,6,4,0]`
* **Expected Output:** `18 Units`
* **Actual Result:** `18 Units` (Verified)
