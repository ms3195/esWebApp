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


FlowRouter.route('/', {
  name: 'Main.show',
  action() {
    BlazeLayout.render('main');
    console.log("homepage route");
  }
});

FlowRouter.route('/roster', {
  name: 'Roster.show',
  action() {
    BlazeLayout.render('roster');
    console.log("rendering roster template from /imports/ui/roster/roster.html");
  }
});

FlowRouter.route('/metrics', {
  name: 'Metrics.show',
  action() {
    BlazeLayout.render('metrics');
    console.log("rendering metrics template from /imports/ui/metrics/metrics.html");
  }
});

FlowRouter.route('/edit/:employeeUrl', {
  name: 'Employees.show',
  action(params) {
    BlazeLayout.render('editEmployee');
    console.log("rendering editEmployee template from /imports/ui/edit/edit.html, ID#", params.employeeUrl);
  },
});
