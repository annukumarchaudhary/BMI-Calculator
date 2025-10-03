function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (!weight || !height) {
    document.getElementById("result").innerText = "⚠️ Please enter valid numbers!";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let status = "";

  if (bmi < 18.5) status = "Underweight 🥦";
  else if (bmi < 24.9) status = "Normal ✅";
  else if (bmi < 29.9) status = "Overweight 🍔";
  else status = "Obese ⚠️";

  document.getElementById("result").innerText = `Your BMI is ${bmi} — ${status}`;
}
