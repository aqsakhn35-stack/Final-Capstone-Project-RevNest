// Reducing-balance EMI calculation
export function calculateEMI(price, downPayment, tenureMonths, annualRate = 15) {
  const principal = Math.max(price - downPayment, 0);
  const monthlyRate = annualRate / 12 / 100;

  if (principal === 0 || tenureMonths === 0) {
    return { emi: 0, totalPayment: 0, totalInterest: 0, remainingLoan: principal };
  }

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);

  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;

  return {
    emi: Math.round(emi),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
    remainingLoan: Math.round(principal),
  };
}