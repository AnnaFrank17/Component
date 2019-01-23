({
    showInput: function (component, event, helper) {
        var isSelect = component.get('v.isSelect');
        //    event.getSource().getElement().focus();

        // window.setTimeout(
        //     $A.getCallback(() => {
        //     //let inputs = component.find('validatableField');
        //     // if (inputs) {
        //         component.find(event.currentTarget.dataset.record).getElement().focus();
        //     // }
        //  }),  110);
        //

        var inputSelected = isSelect[event.currentTarget.dataset.record];
        
        console.log("QWERTYJYTREWERTYUIKYTRERTYUI" + inputSelected);
        isSelect[event.currentTarget.dataset.record] = !inputSelected ? true : inputSelected;
        component.set('v.isSelect', isSelect);
    },

    saveAndClose: function (component, event, helper) {
        //TODO: save the record
        var getContact = component.get('v.contact');
        var action = component.get("c.saveContacts");
        action.setParams({
            'newContact': JSON.stringify(getContact)
        });
        alert(JSON.stringify(getContact));

        action.setCallback(this, function (response) {
            if (response.getState() === "SUCCESS") {
                alert("SUCCESS");
            } else {
                alert('NOT SUCCESS');
            }
        });
        $A.enqueueAction(action);
        component.set('v.isSelect', false);

    },

    init: function (component, event, helper) {
        component.set('v.isSelect', {
            'FirstNameInput': false,
            'LastNameInput': false,
            'Title': false,
            'Email': false
        });
    },

})