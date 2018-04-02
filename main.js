if(Meteor.isClient){
  // this code only runs on the client
  Template.roster.helpers({
    //helper functions go here
    'employee': function(){
      return EmployeesList.find({}, {sort: {score: -1, name: 1} });
    },
    'selectedClass': function(){
      var employeeId = this._id;
      var selectedEmployee = Session.get('selectedEmployee');
      if (employeeId == selectedEmployee){
        return "selected";
      }
    },
    'selectedEmployee': function(){
      var selectedEmployee = Session.get('selectedEmployee');
      return EmployeesList.findOne({ _id: selectedEmployee });
    },
  });

  Template.roster.events({
    //part of highlight selected employee, rest is in css
    'click .employee': function(){
      var employeeId = this._id;
      Session.set('selectedEmployee', employeeId);
    },
    //add 5 points button functionality
    'click .increment': function(){
      var selectedEmployee = Session.get('selectedEmployee');
      EmployeesList.update({ _id: selectedEmployee }, { $inc: {score: 5}});
    },
    'click .decrement': function(){
      var selectedEmployee = Session.get('selectedEmployee');
      EmployeesList.update({ _id: selectedEmployee }, { $inc: {score: -5}});
    },
    'click .remove': function(){
      var selectedEmployee = Session.get('selectedEmployee');
      EmployeesList.remove({ _id: selectedEmployee });
    }
  });

Template.addEmployeeForm.events({
  'submit form': function(){
    event.preventDefault();
    var employeeNameVar = event.target.employeeName.value;
    var employeeAgeVar = event.target.employeeAge.value;
    console.log(employeeNameVar);
    console.log(employeeAgeVar);

    EmployeesList.insert({
      name: employeeNameVar,
      age: employeeAgeVar,
      score: 0
    });
    event.target.employeeName.value = "";
    event.target.employeeAge.value = "";
  }
});

}

if (Meteor.isServer){
  // CODE RUNS ON SERVER only
}

EmployeesList = new Mongo.Collection('employees');
