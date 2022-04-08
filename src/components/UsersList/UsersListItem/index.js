//
import DeleteIcon from "mdi-react/DeleteIcon";
import styles from "./UsersListItem.module.css";

function UsersListItem(props) {
  const {
    handleDeleteUser,
    selectUsers,
    user: { id, firstName, lastName, age, src, isSelected },
  } = props;

  return (
    <>
      <li
        onClickCapture={() => selectUsers(id)}
        className={isSelected ? styles.liList : styles.liListClick}
      >
        <img className={styles.userImg} src={src} />
        <p className={styles.pUserInfo}>
          <span>{firstName}</span>
          <span>{lastName}</span>
          <span>{age}</span>
        </p>

        <button
          onClick={() => handleDeleteUser(id)}
          className={styles.userBtnDel}
        >
          <DeleteIcon />
        </button>
      </li>
    </>
  );
}

export default UsersListItem;
