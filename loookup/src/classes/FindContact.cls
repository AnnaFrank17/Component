public class FindContact {

    @AuraEnabled
    public static List<Contact> getContacts(Id recordId) {
        return [Select Id, FirstName, LastName, Title, Email, Account.Name From Contact Where AccountId = :recordId];
    }

    @AuraEnabled
    public static List<String> getAllAccountsForContact() {
        List<String> accountNames = new List<String>();
        for (Account account : [SELECT Name FROM Account]) {
            accountNames.add(account.Name);
        }
        return accountNames;
    }

    @AuraEnabled
    public static void saveContacts(String newContact) {
        Contact cont = (Contact) System.JSON.deserialize(newContact, Contact.class);
        System.debug(cont);
        update cont;
    }

    @AuraEnabled
    public static void editAttach(String contactId, String accountName) {
//        System.debug('_____________' + contactId);
//        System.debug('+++++++++++++++++' + accountName);
        List<Account> newAccountForContact = [
                SELECT Name
                FROM Account
                WHERE Name = :accountName
        ];
        Contact contact = [
                SELECT FirstName, AccountId
                FROM Contact
                WHERE Id = :contactId
        ];
        if (!newAccountForContact.isEmpty()) {
            contact.AccountId = newAccountForContact[0].Id;
            update contact;
        }
    }
}