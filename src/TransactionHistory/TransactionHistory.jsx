export default function TransactionHistory({
  operation: { id, type, amount, currency },
}) {
  return (
    <table>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      <tbody></tbody>
    </table>
  );
}
