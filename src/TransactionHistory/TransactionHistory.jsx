import TransactionHistoryRow from '../TransactionHistoryRow/TransactionHistoryRow';

export default function TransactionHistory({ operations }) {
  // console.log(operations);
  return (
    <table>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      <tbody>
        {operations.map(operation => (
          <tr key={operation.id}>
            <TransactionHistoryRow operation={operation} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
