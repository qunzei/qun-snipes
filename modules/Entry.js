class Entry {

    constructor(id, username){
        this.id = id;
        this.users = Array();
        this.users.push(username);
    }
}


module.exports = Entry;