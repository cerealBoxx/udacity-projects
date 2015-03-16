function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;
}

AddressBook.prototype = {
    addContact: function(contact) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
        } else {
            throw new Error("This is not a valid contact.");
        }

    },
    getContact: function(contactId) {
        if (contactId < this.contacts.length && contactId >= 0 && typeof contactId === "number") {
            return this.contacts[contactId];
        } else {
            throw new Error("There is no contact with this id.")
        }
    },
    deleteContact: function(contactId) {
        this.contacts.splice(contactId, 1);
    },
    getInitialContacts: function(cb) {
        var self = this;

        setTimeout(function() {
            self.initialComplete = true;
            if (cb) {
                return cb();
            }
        }, 3);
    }
}