import css from './TransactionHistory.module.css';
import TransactionHistoryRow from '../TransactionHistoryRow/TransactionHistoryRow';

export default function TransactionHistory({ operations }) {
  return (
    <table className={css.tableHistory}>
      <thead>
        <tr>
          <th className={css.tableHeader}>Type</th>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {operations.map(operation => (
          <tr className={css.tableRow} key={operation.id}>
            <TransactionHistoryRow operation={operation} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
