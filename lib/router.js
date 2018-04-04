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
  console.log("rendering main template from /client/main.html");
});

Router.route('/test', function () {
  this.render('test');
  console.log("rendering roster template from /imports/ui/roster/roster.html");
});
