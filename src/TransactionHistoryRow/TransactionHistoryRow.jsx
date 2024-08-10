import css from './TransactionHistoryRow.module.css';
export default function TransactionHistoryRow({
  operation: { type, amount, currency },
}) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
