import css from './TransactionHistoryItem.module.css';

export default function TransactionHistoryItem({item : {type, amount, currency}} ) {
   
    return (
      <tr className={css.list}>
        <td className={css.conteinerItem}>{type}</td>
        <td className={css.conteinerItem}>{amount}</td>
        <td className={css.conteinerItem}>{currency}</td>
      </tr>
    );
  }