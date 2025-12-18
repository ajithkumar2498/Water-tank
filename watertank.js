        function calculateAndDraw() {
            // 1. Parse Input
            const inputStr = document.getElementById('heights').value;
            // Convert string to array of numbers, filtering out non-numbers
            const height = inputStr.split(',').map(num => parseInt(num.trim())).filter(n => !isNaN(n));

            if (height.length === 0) {
                alert("Please enter valid numbers");
                return;
            }

            // 2. Algorithm Logic (Trapping Rain Water)
            const n = height.length;
            const leftMax = new Array(n).fill(0);
            const rightMax = new Array(n).fill(0);
            const waterLevels = new Array(n).fill(0);

            // Fill Left Max
            leftMax[0] = height[0];
            for (let i = 1; i < n; i++) {
                leftMax[i] = Math.max(height[i], leftMax[i - 1]);
            }

            // Fill Right Max
            rightMax[n - 1] = height[n - 1];
            for (let i = n - 2; i >= 0; i--) {
                rightMax[i] = Math.max(height[i], rightMax[i + 1]);
            }

            // Calculate Water
            let totalWater = 0;
            for (let i = 0; i < n; i++) {
                // The water level is determined by the smallest of the two walls
                const level = Math.min(leftMax[i], rightMax[i]);
                
                // Water depth is Level - Block Height. (Cannot be negative)
                waterLevels[i] = Math.max(0, level - height[i]);
                totalWater += waterLevels[i];
            }

            // 3. Update Text Result
            document.getElementById('result').innerText = `Total Water: ${totalWater} Units`;

            // 4. Render SVG Visualization 
            renderSVG(height, waterLevels);
        }

        function renderSVG(heights, waterLevels) {
            const container = document.getElementById('svg-container');
            container.innerHTML = ''; // Clear previous

            const blockWidth = 40;
            const maxVal = Math.max(...heights) + 2; // Add headroom
            const svgHeight = maxVal * 40; 
            const svgWidth = heights.length * blockWidth;

            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("width", svgWidth);
            svg.setAttribute("height", svgHeight);
            svg.setAttribute("id", "visualization");
            // Flip SVG coordinate system so 0,0 is at the bottom left for easier drawing
            svg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);

            heights.forEach((h, index) => {
                const x = index * blockWidth;
                
                // Draw Block (Yellow)
                if (h > 0) {
                    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    rect.setAttribute("x", x);
                    // SVG y starts from top, so we calculate y based on height
                    rect.setAttribute("y", svgHeight - (h * 40)); 
                    rect.setAttribute("width", blockWidth);
                    rect.setAttribute("height", h * 40);
                    rect.setAttribute("class", "block");
                    svg.appendChild(rect);
                }

                // Draw Water (Blue) on top of block
                const waterH = waterLevels[index];
                if (waterH > 0) {
                    const waterRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    waterRect.setAttribute("x", x);
                    // Starts above the block
                    waterRect.setAttribute("y", svgHeight - ((h + waterH) * 40)); 
                    waterRect.setAttribute("width", blockWidth);
                    waterRect.setAttribute("height", waterH * 40);
                    waterRect.setAttribute("class", "water");
                    svg.appendChild(waterRect);
                }
            });

            container.appendChild(svg);
        }

        // Initialize on load
        calculateAndDraw();

