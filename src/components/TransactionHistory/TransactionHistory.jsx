import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {

  return (
    <>
      <table className={css.conteiner}>
        <thead className={css.conteinerHeader}>
          <tr>
            <th className={css.headerItem}>Type</th>
            <th className={css.headerItem}>Amount</th>
            <th className={css.headerItem}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return <TransactionHistoryItem key={item.id} item={item} />;
          })}
        </tbody>
      </table>
    </>
  );
}
