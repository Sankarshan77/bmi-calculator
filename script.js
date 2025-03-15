// Function to calculate BMI
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let weightUnit = document.getElementById("weight-unit").value;
    let heightUnit = document.getElementById("height-unit").value;

    // Convert weight to kg
    if (weightUnit === "lbs") {
        weight = weight * 0.453592; // Convert lbs to kg
    } else if (weightUnit === "stone") {
        weight = weight * 6.35029; // Convert stone to kg
    }

    // Convert height to meters
    if (heightUnit === "inches") {
        height = height * 0.0254; // Convert inches to meters
    } else if (heightUnit === "feet") {
        height = height * 0.3048; // Convert feet to meters
    } else {
        height = height / 100; // Convert cm to meters
    }

    // Calculate BMI
    if (weight > 0 && height > 0) {
        let bmi = weight / (height * height);
        document.getElementById("bmi-value").textContent = bmi.toFixed(2);

        // Classify BMI category
        let category = "";
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }
        document.getElementById("bmi-category").textContent = category;
    } else {
        alert("Please enter valid weight and height values.");
    }
}

// Function to move cursor to height field when Enter is pressed in weight field
function focusNext(event, nextFieldId) {
    if (event.key === "Enter") {
        document.getElementById(nextFieldId).focus();
    }
}

// Function to calculate BMI when Enter is pressed in height field
function calculateOnEnter(event) {
    if (event.key === "Enter") {
        calculateBMI();
    }
}
