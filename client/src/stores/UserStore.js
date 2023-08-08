import { makeObservable, action, observable, computed } from "mobx";

class User {
  user = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      fetchUser: action,
      getUser: computed,
      createUser: action,
      deleteUser: action,
    });
  }

  fetchUser = async () => {
    try {
      const response = await fetch("/api/users/all");

      if (response.ok) {
        const data = await response.json();
        this.user = data;
        console.log(data);
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.error("Ошибка получения пользователя:", error);
    }
  };

  get getUser() {
    return this.user;
  }

  createUser(user) {
    this.user = user;
  }

  deleteUser() {
    this.user = null;
  }
}

export default User;