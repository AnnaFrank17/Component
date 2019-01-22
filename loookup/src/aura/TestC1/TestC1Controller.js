({
    getAllAccounts: function(component, event, helper) {
        helper.getAllAccountsForLookup(component);
    },

    unAttachAccount: function(component, event, helper) {
        var contactId = event.getSource().get("v.name");
        var accountName = event.getSource().get("v.value");
        // alert(contactId);
        // alert(accountName);
        helper.attachContactToAccount(component, contactId, accountName, event);
    },

	findData: function(component, event, helper) {
        helper.findAllContacts(component, event);
    },
})