Session.set("AddConvMode", false);

Template.conversations.helpers({
    allParticipiateConversations: function() {
        return Conversations.find({}).count() > 0 ? Conversations.find({}, {sort:{started_time: -1}}) : false;
    },
    
    addConvMode: function(){
       return Session.get('AddConvMode');
    },
    
    
    usernames: function(){
        return Meteor.users.find({}, {fields:{username: 1}});
    }
});

Template.conversations.events({
    "click #addNewConversation_btn, click #cancelNewConversation_btn": function(){
        Session.set("AddConvMode", !Session.get('AddConvMode'));
    },
    
    "click #newRecepient_submit": function(event, template){
        var theme = template.find("#conversationTheme").value;
        var recepients = template.find("#conversationRecepients").value;
        var recepients_arr = recepients.split(",");
        
        Conversations.insert({ conversation_theme: theme, recepients: recepients_arr });
        
        Session.set("AddConvMode", false);
        var last_conv = Conversations.findOne({}, {sort: {started_time: -1}});
        FlowRouter.go("/conversation/" + last_conv._id);
    }
});