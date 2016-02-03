
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Accounts.onLogin(function () {  
  FlowRouter.go('conversations');
});

Tracker.autorun(function () {  
  if (!Meteor.userId()) {
    FlowRouter.go('login');
  }
})