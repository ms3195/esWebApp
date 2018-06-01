Template.editEmployee.onRendered(function() {
  console.log("URL IS SUPPOSED TO BE AFTER THIS")
  var employeeId = FlowRouter.current().params.employeUrl;
  console.log(employeeId);
  console.log("Pulling up Employee #:"+employeeId);
  console.log("URL IS SUPPOSED TO BE BEFORE THIS");
});

Template.editEmployee.helpers({
  //helper functions go here
  'employee': function(){
    return EmployeesList.find({}, {sort: {lastName: 1} });
  },
  'selectedClass': function(){
    var meteorId = this._id;
    var selectedEmployee = Session.get('selectedEmployee');
    if (meteorId == selectedEmployee){
      return "selected";
    }
  },
  'selectedEmployee': function(){
    var selectedEmployee = Session.get('selectedEmployee');
    return EmployeesList.findOne({ _id: selectedEmployee });
  },
});

Template.editEmployee.events({
  // MOVE TO EDIT PAGE
  // 'click .remove': function(){
  //   var selectedEmployee = Session.get('selectedEmployee');
  //   EmployeesList.remove({ _id: selectedEmployee });
  // }
});
