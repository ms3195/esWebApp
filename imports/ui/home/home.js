Template.main.events({
  'click #homeButton': function () {
    Router.go('/');
    console.log("navigating to home");
  },
  'click #rosterButton': function () {
    Router.go('/roster');
    console.log("navigating to roster");

  },
  'click #metricsButton': function () {
    Router.go('/metrics');
    console.log("navigating to metrics");

  },
});
