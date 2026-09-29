import { useState } from "react";
import { calculateEMI } from "../utils/emiCalculator";

export default function EMICalculator({ price }) {
  const [downPayment, setDownPayment] = useState(Math.round(price * 0.2));
  const [tenure, setTenure] = useState(36);

  const result = calculateEMI(price, Number(downPayment) || 0, Number(tenure) || 1);

  return (
    <div className="emi-calculator">
      <h3>EMI Calculator</h3>
      <label>
        Down Payment (PKR)
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
          min="0"
          max={price}
        />
      </label>
      <label>
        Loan Tenure (months)
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          min="1"
          max="84"
        />
      </label>
      <div className="emi-results">
        <p>Monthly Installment: <strong>PKR {result.emi.toLocaleString()}</strong></p>
        <p>Remaining Loan Amount: PKR {result.remainingLoan.toLocaleString()}</p>
        <p>Total Interest: PKR {result.totalInterest.toLocaleString()}</p>
        <p>Total Payment: PKR {result.totalPayment.toLocaleString()}</p>
      </div>
    </div>
  );
}