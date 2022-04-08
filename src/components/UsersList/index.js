import React, { Component } from "react";
import UsersListItem from "./UsersListItem";
import styles from "./UsersList.module.css";

const usersDB = [
  {
    id: 1,
    firstName: "Atlas",
    lastName: "Moon",
    age: 22,
    src: "https://i.pinimg.com/originals/3f/9d/c7/3f9dc7a2a37bcc7fa5e40002c16e8de9.jpg",
  },
  {
    id: 2,
    firstName: "Nick",
    lastName: "Run",
    age: 34,
    src: "https://svidok.info/sites/default/files/styles/large/public/120850605_3236228933169187_3486706962441855691_o.jpg?itok=1vEqxbmJ",
  },
  {
    id: 3,
    firstName: "Jungo",
    lastName: "Cat",
    age: 18,
    src: "https://p.favim.com/orig/2018/11/22/jeon-jungkook-bts-low-quality-Favim.com-6578504.jpg",
  },
  {
    id: 4,
    firstName: "Layla",
    lastName: "Dog",
    age: 27,
    src: "https://fotogora.ru/img/blog/or/2019/3/7/13962.jpg",
  },
  {
    id: 5,
    firstName: "Miya",
    lastName: "Trash",
    age: 48,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvlKjd2sZqPNpqoz60OD8nxGwTCMvl0WUrg&usqp=CAU",
  },
];

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersDB.map((u) => ({ ...u, isSelected: true })),
    };
  }
  selectUsers = (id) => {
    const { users } = this.state;
    const newUsers = [...users];
    const selectedUserIndex = newUsers.findIndex((u) => u.id === id);
    newUsers[selectedUserIndex].isSelected =
      !newUsers[selectedUserIndex].isSelected;
    this.setState({ users: newUsers });
  };
  //
  handleDeleteUser = (id) => {
    const { users } = this.state;
    const newUsers = [...users];
    const selectUsers = newUsers.filter((u) => u.id !== id);
    this.setState({ users: selectUsers });
  };

  mapUser = (u) => (
    <UsersListItem
      key={u.id}
      user={u}
      selectUsers={this.selectUsers}
      handleDeleteUser={this.handleDeleteUser}
    />
  );

  render() {
    const { users } = this.state;
    return <ul className={styles.ulList}>{users.map(this.mapUser)}</ul>;
  }
}
export default UsersList;
