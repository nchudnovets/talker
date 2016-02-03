
ConversationSchema = new SimpleSchema({
    "conversation_theme": {
        type: String,
        label: "Theme: ",
        optional: false
    },
    
    "recepients": {
        type: [String],
        label: "Conversation with users: ",
        optional: false
    },
    
    "started_by": {
        type: String,
        autoform: {
            type: 'hidden'
        },
        autoValue:function(){
            if ( this.isInsert ) {
                return this.userId;
            }
        }
    },
    
    "started_by_username": {
        type: String,
        autoform: {
            type: 'hidden'
        },
        autoValue:function(){
            if ( this.isInsert ) {
                return Meteor.user().username;
            }
        }
    },
    
    "started_time": {
        type: Date,
        label: "Message time",
        autoform: {
            type: 'hidden'
        },
        
        autoValue: function() {
          if ( this.isInsert ) {
            return new Date;
          } 
        }
    }
});


Conversations = new Mongo.Collection('conversations');

Conversations.attachSchema( ConversationSchema );