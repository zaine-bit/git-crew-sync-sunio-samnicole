function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const overtimeMultiplier = 1.5;
  const regularHours = Math.min(hours, 8);
  const overtimeHours = Math.max(hours - 8, 0);
  return Math.round(regularHours * rate + overtimeHours * rate * overtimeMultiplier);
}

module.exports = { isValidShift, calculatePay };