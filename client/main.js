import { Meteor } from 'meteor/meteor'

if(Meteor.isClient){
  console.log("is client");

  // Template.main.events({
  //   'click .rosterButton': function(){
  //     console.log("switching to roster page");
  //     //add code to switch to a roster page
  //   },
  //
  // });

}

Template.main.events({
  'click #rosterButton': function () {
    Router.go('/test');
  }
});
