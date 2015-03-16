describe('Address Book', function() {
    var addressBook,
        contact;

    beforeEach(function() {
        addressBook = new AddressBook(),
        contact = new Contact();
    });

    it('should be able to add a contact', function() {
        addressBook.addContact(contact);

        expect(addressBook.getContact(0)).toBe(contact);
    });

    it('should be able to delete a contact', function() {
        addressBook.addContact(contact);
        addressBook.deleteContact(0);

        expect(function() {
            addressBook.getContact(0)
        }).toThrow(new Error("There is no contact with this id."));
    });

});


describe('Async Address Book', function() {

    var addressBook = new AddressBook();

    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            done();
        });
    });

    it('should grab initial contacts', function(done) {

        addressBook.getInitialContacts();
        expect(addressBook.initialComplete).toBe(true);
        done();
    })

})