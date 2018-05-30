// const loggedInRoutes = FlowRouter.group({
//   triggersEnter: [
//     (context, redirect) => {
//       if (!Meteor.userId()) {
//         redirect('/login');
//       }
//     }
//   ]
// });
//
// loggedInRoutes.route('/roster', {
//   name: 'roster',
//   action() {
//     console.log("working")
//   }
// });


Router.route('/', function () {
  this.render('main');
  console.log("homepage route");
});

Router.route('/roster', function () {
  this.render('roster');
  console.log("rendering roster template from /imports/ui/roster/roster.html");
});

Router.route('/metrics', function () {
  this.render('metrics');
  console.log("rendering metrics template from /imports/ui/metrics/metrics.html");
});

FlowRouter.route('/edit/:employeeUrl', {
  action: function(params) {
    BlazeLayout.render('editEmployee');
    console.log("editing employee #", params.employeeUrl);
  },
  name: "employeeUrl"
});
