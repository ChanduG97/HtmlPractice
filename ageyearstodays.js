<html>
<body>
<script>
function ageToDays(ageInYears) {
  const daysInYear = 365.25;
  const ageInDays = ageInYears * daysInYear;
  return ageInDays;
}
</script>
const ageInYears = parseFloat(prompt("Enter your age in years:"));
const ageInDays = ageToDays(ageInYears);

console.log(`Your age in days is approximately ${ageInDays.toFixed(2)} days.`);
</body>
</html>