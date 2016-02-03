Session.set("editRecep", false);

Template.conversation.helpers({
    "conversation": function(){
        return Conversations.find({});
    },
    
    "messages": function(){
        return Messages.find({}).count() > 0 ? Messages.find({}, { sort: {created_time: -1} }) : false;
    },
    
    "editRecepMode": function(){
        return Session.get("editRecep");
    }
});

Template.conversation.events({
    "submit #newMessageForm": function(event){
        event.preventDefault();
        
        var message_body = document.getElementById("newMessageForm_text").value;
        Messages.insert({"conversation_id": this._id, "message_body": message_body});
        document.getElementById("newMessageForm_text").value = "";
        
    },
    
    "submit #editRecepientsForm": function(event){
        event.preventDefault();
        
        var new_recep = document.getElementById("newRecepient_name").value;
        if(new_recep !== ""){
            Conversations.update({ _id: this._id }, { $addToSet: { recepients: new_recep } });
        };
        Session.set("editRecep", !Session.get("editRecep"));
        document.getElementById("newRecepient_name").value = "";
    },
    
    "click #editRecepientsForm_btn": function(){
        Session.set("editRecep", !Session.get("editRecep"));
    }
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YY  HH:mm');
});
