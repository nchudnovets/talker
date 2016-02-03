Meteor.publish("allOwnConversations", function (userId) {
    return Conversations.find( {"started_by": userId} );
});

Meteor.publish("allParticipiateConversations", function (username) {
    return Conversations.find( {"recepients": username});
});

Meteor.publish("oneConversation", function (conversation_id) {
    return Conversations.find( {"_id": conversation_id} );
});

Meteor.publish("convMessages", function (conversation_id) {
    return Messages.find( {"conversation_id": conversation_id} );
});

Meteor.publish("usernames", function(){
    return Meteor.users.find({}, {fields: {username: 1}} );
});
