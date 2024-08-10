import css from './TransactionHistory.module.css';
import TransactionHistoryRow from '../TransactionHistoryRow/TransactionHistoryRow';

export default function TransactionHistory({ operations }) {
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
