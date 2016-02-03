Template.login.events({
    'click #login-btn-submit' : function(e, template){
    
        var username = template.find('#login-username').value;
        var password = template.find('#login-password').value;
        
        
        Meteor.loginWithPassword(username, password, function(err){
            if (err){
               alert("Something wrong. You are not logged in.");
            }
        });
        
        FlowRouter.go('conversations');
    },
    
    'click #reg-btn-submit' : function(e, template) {
        var username = template.find('#signin-username').value;
        var password1 = template.find('#signin-password1').value;
        var password2 = template.find('#signin-password2').value;
         
        if(password1 === password2){
            Accounts.createUser({ username: username, password : password1 }, function(err){
                if (err) {
                    alert("Something wrong. You are not signed in.");
                } 
            });
        }
        else{
            alert("Check passwords");
        };
        
        FlowRouter.go('conversations');
    }
})