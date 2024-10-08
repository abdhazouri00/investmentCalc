import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({ data }) {
  const resultsData = calculateInvestmentResults(data);

  if (!resultsData || resultsData.length === 0) {
    return <p>No data available to display results.</p>;
  }

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Investment (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const investedCapital =
            initialInvestment + yearData.annualInvestment * yearData.year;
          const totalInterest = yearData.valueEndOfYear - investedCapital;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.annualInvestment)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
