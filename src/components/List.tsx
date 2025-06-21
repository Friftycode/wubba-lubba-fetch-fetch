import logo from '../assets/sample.avif';
import styles from './List.module.less';

const List = () => {
  return (
    <table className={styles.listTable}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Description</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={logo} alt="Placeholder" />
          </td>
          <td>This is a placeholder image.</td>
          <td>5 stars</td>
        </tr>
        <tr>
          <td>
            <img src={logo} alt="Placeholder" />
          </td>
          <td>This is another placeholder image.</td>
          <td>4 stars</td>
        </tr>
      </tbody>
    </table>
  );
};

export default List;
