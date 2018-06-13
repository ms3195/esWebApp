import { Template } from 'meteor/templating';
import './edit.html';

if(Meteor.isClient){

  Template.editEmployee.onRendered(function() {
    var selectedId = FlowRouter.current().params.employeeUrl;
    console.log("Pulling up Employee #"+selectedId);

    //    event.target.employeeId.value = "sfef";

  });

  Template.editEmployee.helpers({
    //helper functions go here
    'selectedEmplId': function(){
      var selectedEmplId = FlowRouter.current().params.employeeUrl;
      return EmployeesList.findOne({ employeeId: selectedEmplId });
    },

    'selectedSupervisorId': function(){
      var selectedEmplId = FlowRouter.current().params.employeeUrl;
      var selectedSupervisorId = EmployeesList.findOne({ employeeId: selectedEmplId }).directSupervisor;
      return EmployeesList.findOne({ employeeId: selectedSupervisorId });
    },

    /*
    'selectedEmployee': function(){
    var selectedId = FlowRouter.current().params.employeeUrl;
    var selectedEmployee = EmployeesList.findOne({ employeeId: selectedId });
    return EmployeesList.findOne({ _id: selectedEmployee });
  },
  */

}); //end editEmployee helpers


Template.editEmployee.events({
  'click #deleteEmployeeButton': function () {
    //Delete Confirmation
    if (confirm("Are you sure you want to delete this employee?")){
      if (confirm("Are you really sure?")){
        var selectedId = FlowRouter.current().params.employeeUrl;
        //    var selectedEmployee = EmployeesList.findOne({ employeeId: selectedId });
        //console.log(selectedEmployee)
        var meteorId = EmployeesList.findOne({ employeeId: selectedId })._id;
        //console.log("meteor ID:"+meteorId)

        //delete employee
        console.log("Deleting Employee #:"+selectedId)
        EmployeesList.remove({ _id: meteorId });

        //redirect to roster
        FlowRouter.go("/roster");

      }
    }
  }, //end deleteEmployeeButton

  'click #saveChangesButton': function () {
    if (confirm("Are you sure you want to save changes?")){
      //insert code here to commit changes
      console.log("Commiting changes")
    }
  }, //end saveChangesButton

  'click #supervisorButton': function () {
    var selectedId = FlowRouter.current().params.employeeUrl;
    var meteorId = EmployeesList.findOne({ employeeId: selectedId })._id;
    console.log("Employee MeteorID: "+meteorId)

    var employeeDirectSupervisorID = EmployeesList.findOne({ employeeId: selectedId }).directSupervisor;
    console.log(employeeDirectSupervisorID)
    console.log("Switching to supervisor.")

    FlowRouter.go("/edit/"+employeeDirectSupervisorID);

  }, //end saveChangesButton

}); //End editEmployee.events







} //end isClient
