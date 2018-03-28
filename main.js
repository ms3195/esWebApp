if(Meteor.isClient){
  // this code only runs on the client
}

if (Meteor.isServer){
  // CODE RUNS ON SERVER only
}

PlayersList = new Mongo.Collection('players');
