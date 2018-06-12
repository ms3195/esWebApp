Template.main.events({
  'click #homeButton': function () {
    FlowRouter.go('/');
    console.log("navigating to home");
  },

  'click #rosterButton': function () {
    FlowRouter.go('/roster');
    console.log("navigating to roster");
  },
  
  'click #jobsButton': function () {
    FlowRouter.go('/jobs');
    console.log("navigating to jobs");
  },

  'click #metricsButton': function () {
    FlowRouter.go('/metrics');
    console.log("navigating to metrics");
  },

});
