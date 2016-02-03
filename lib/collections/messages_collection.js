MessageSchema = new SimpleSchema({
    "conversation_id": {
       type: String,
        label: "ID of conversation",
        optional: false,
        autoform: {
            type: 'hidden'
        }
    },
    
    "message_body": {
        type: String,
        label: "Add message",
        optional: false
    },
    
    "read_by": {
        type: [String],
        label: "Read by:",
        optional: true
    },
    
    "created_by": {
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
    
    "created_time": {
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

Messages = new Mongo.Collection('messages');

Messages.attachSchema( MessageSchema );