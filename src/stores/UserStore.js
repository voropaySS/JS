import { makeObservable, action, observable,  } from "mobx";

class User {
    user = null;

    constructor(this, {
        user: observable,
        fetchUser: action,
        getUser: computed
    })

    fetchUser = async () => {
        try {
            const response = await fetch('URL_TO_GET_USER');
            const data = await response.json();
            this.user = data;
          } catch (error) {
            console.error('Error fetching user:', error);
          }
    }

    getUser() {
        return 
    }

}