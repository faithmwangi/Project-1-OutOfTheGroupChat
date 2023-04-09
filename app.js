//DISPLAY THE NUMBER OF DAYS
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const numDaysInput = document.getElementById("NumDays");

endInput.addEventListener("change", () => {
  const startDate = new Date(startInput.value);
  const endDate = new Date(endInput.value);
  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  numDaysInput.value = diffDays;
});
