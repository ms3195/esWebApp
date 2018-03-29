if(Meteor.isClient){
  // this code only runs on the client
  Template.leaderboard.helpers({
    //helper functions go here
    'player': function(){
      return PlayersList.find();
    },
  });

  Template.leaderboard.events({
    'click .player': function(){
      console.log("you clicked a .player element");
    },
  });

}

if (Meteor.isServer){
  // CODE RUNS ON SERVER only
}

PlayersList = new Mongo.Collection('players');
