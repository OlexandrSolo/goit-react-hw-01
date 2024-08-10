import css from './TransactionHistoryRow.module.css';
export default function TransactionHistoryRow({
  operation: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.tableDate}>{type}</td>
      <td className={css.tableDate}>{amount}</td>
      <td className={css.tableDate}>{currency}</td>
    </>
  );
}
