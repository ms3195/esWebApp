import { Template } from 'meteor/templating';

import './roster.html';
// import '../server/main.js';


if(Meteor.isClient){
  Meteor.subscribe('employees');
  // this code only runs on the client
  Template.roster.helpers({
    //helper functions go here
    'employee': function(){
      return EmployeesList.find({}, {sort: {lastName: 1} });
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
    'click #editEmployeeButton': function () {
      Router.go('/edit');
      console.log("navigating to edit page");
    },
    //part of highlight selected employee, rest is in css
    'click .employee': function(){
      var employeeId = this._id;
      Session.set('selectedEmployee', employeeId);
    },
    'click .remove': function(){
      var selectedEmployee = Session.get('selectedEmployee');
      EmployeesList.remove({ _id: selectedEmployee });
    }
  });

  Template.addEmployeeForm.events({
    'submit form': function(){
      event.preventDefault();

      //define fields
      var employeeFirstNameVar = event.target.employeeFirstName.value;
      var employeeLastNameVar = event.target.employeeLastName.value;
      var employeeDepartmentVar = event.target.employeeDepartment.value;
      var employeeTitleVar = event.target.employeeTitle.value;
      var employeeDirectSupervisorVar = event.target.employeeDirectSupervisor.value;

      //check if empty feature. ADD THIS IN. JUST A SIMPLE IF EMPTY > THEN ERROR
      if (employeeFirstNameVar == ""){
        alert("First Name is blank.");
      } else if (employeeLastNameVar == ""){
        alert("Last Name is blank.");
      } else if (employeeDepartmentVar == ""){
        alert("Department is blank.");
      } else if (employeeTitleVar == ""){
        alert("Title is blank.");
      } else if (employeeDirectSupervisorVar == ""){
        alert("Direct Supervisor is blank.");
      } else {

        //insert to mongodb
        console.log("IS FILLED, PUSHING BELOW TO DB");
        console.log("firstName: " + employeeFirstNameVar);
        console.log("lastName: " + employeeLastNameVar);
        console.log("department: " + employeeDepartmentVar);
        console.log("title: " + employeeTitleVar);
        console.log("directSupervisor: " + employeeDirectSupervisorVar);
        EmployeesList.insert({
          firstName: employeeFirstNameVar,
          lastName: employeeLastNameVar,
          department: employeeDepartmentVar,
          title: employeeTitleVar,
          directSupervisor: employeeDirectSupervisorVar,
        });
        //clear form
        event.target.employeeFirstName.value = "";
        event.target.employeeLastName.value = "";
        event.target.employeeDepartment.value = "";
        event.target.employeeTitle.value = "";
        event.target.employeeDirectSupervisor.value = "";
      } //end else
    }//end submit form
  });//end addEmployeeForm.events


} //end isClient

if (Meteor.isServer){
  // CODE RUNS ON SERVER only
}
