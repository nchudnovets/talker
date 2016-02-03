function checkLoggedIn (ctx, redirect) {  
  if (!Meteor.userId()) {
    redirect('/login');
  }
}

FlowRouter.route('/', {
    name: "home",
    triggersEnter: [checkLoggedIn],
    action: function(){
        BlazeLayout.render("chat_layout", {content: "home"});
    }
});

FlowRouter.route('/conversations', {
    name: "conversations",
    triggersEnter: [checkLoggedIn],
    subscriptions: function (params, queryParams) {
        this.register('allOwnConversations', Meteor.subscribe('allOwnConversations', Meteor.userId()));
        this.register('allParticipiateConversations', Meteor.subscribe('allParticipiateConversations', Meteor.user().username));
        this.register('usernames', Meteor.subscribe('usernames'));
    },
    action: function(){
        BlazeLayout.render("chat_layout", {content: "conversations"});
    }
});

FlowRouter.route('/conversation/:conversation_id', {
    name: "conversation",
    triggersEnter: [checkLoggedIn],
    subscriptions: function (params, queryParams) {
        this.register('convMessages', Meteor.subscribe('convMessages', params.conversation_id));
        this.register('oneConversation', Meteor.subscribe('oneConversation', params.conversation_id));
    },
    action: function(params){
         BlazeLayout.render("chat_layout", {content: "conversation"});
    }
});

FlowRouter.route('/login', {
    name: "login",
    action: function(){
         BlazeLayout.render("chat_layout", {content: "login"});
    }
});