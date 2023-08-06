import { makeObservable, action, observable, computed } from "mobx";
import { injectStores } from "@mobx-devtools/tools";

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
      const response = await fetch("URL_TO_GET_USER");

      if (response.ok) {
        const data = await response.json();
        this.user = data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
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

const userStore = new User();
injectStores({ userStore });

export default userStore;
