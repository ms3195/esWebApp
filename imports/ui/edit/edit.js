import { Template } from 'meteor/templating';
import './edit.html';

if(Meteor.isClient){

  Template.editEmployee.onRendered(function() {
    var selectedId = FlowRouter.current().params.employeeUrl;
    console.log("Pulling up Employee #"+selectedId);

  }); //end onRendered

  //   Template.editEmployee.helpers({
  //     //helper functions go here
  //     'selectedEmplId': function(){
  //       var selectedEmplId = FlowRouter.current().params.employeeUrl;
  //       return EmployeesList.findOne({ employeeId: selectedEmplId });
  //     },
  //
  //     'selectedSupervisorId': function(){
  //       var selectedEmplId = FlowRouter.current().params.employeeUrl;
  //       var selectedSupervisorId = EmployeesList.findOne({ employeeId: selectedEmplId }).directSupervisor;
  //       return EmployeesList.findOne({ employeeId: selectedSupervisorId });
  //     },
  //
  //     /*
  //     'selectedEmployee': function(){
  //     var selectedId = FlowRouter.current().params.employeeUrl;
  //     var selectedEmployee = EmployeesList.findOne({ employeeId: selectedId });
  //     return EmployeesList.findOne({ _id: selectedEmployee });
  //   },
  //   */
  //
  // }); //end editEmployee helpers

  Template.editEmployeeForm.helpers({
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


  'click #supervisorButton': function () {
    var selectedId = FlowRouter.current().params.employeeUrl;
    var meteorId = EmployeesList.findOne({ employeeId: selectedId })._id;
    console.log("Employee MeteorID: "+meteorId)

    var employeeDirectSupervisorID = EmployeesList.findOne({ employeeId: selectedId }).directSupervisor;
    console.log("Switching to supervisor ID#: "+employeeDirectSupervisorID)

    FlowRouter.go("/roster/");
    //^this extra line fixes issue where supervisor info wouldn't load,
    //but causes issue where pressing the back button goes back to roster
    //before going back to previous employee

    FlowRouter.go("/edit/"+employeeDirectSupervisorID);
  }, //end supervisorButton

}); //End editEmployee.events

Template.editEmployeeForm.events({
  'submit form': function () {
    if (confirm("Are you sure you want to save changes?")){
      //insert code here to commit changes

      //INSERT RIGHT HERE
      var selectedId = FlowRouter.current().params.employeeUrl;
      var meteorId = EmployeesList.findOne({ employeeId: selectedId })._id;

      var employeeIdVar = event.target.employeeId.value;
      var employeeFirstNameVar = event.target.employeeFirstName.value;
      var employeeLastNameVar = event.target.employeeLastName.value;
      var employeeDepartmentVar = event.target.employeeDepartment.value;
      var employeeTitleVar = event.target.employeeTitle.value;
      var employeeDirectSupervisorVar = event.target.employeeDirectSupervisor.value;

      //update mongodb

      if (employeeIdVar !== ""){
        EmployeesList.update(meteorId, {
          $set: { employeeId: employeeIdVar },
        });
        FlowRouter.go("/edit/"+employeeIdVar);
      }//end if
      if (employeeFirstNameVar !== ""){
        EmployeesList.update(meteorId, {
          $set: { firstName: employeeFirstNameVar },
        });
      }//end if
      if (employeeLastNameVar !== ""){
        EmployeesList.update(meteorId, {
          $set: { lastName: employeeLastNameVar },
        });
      }//end if
      if (employeeDepartmentVar !== ""){
        EmployeesList.update(meteorId, {
          $set: { department: employeeDepartmentVar },
        });
      }//end if
      if (employeeTitleVar !== ""){
        EmployeesList.update(meteorId, {
          $set: { title: employeeTitleVar },
        });
      }//end if
      if (employeeDirectSupervisorVar !== ""){
        EmployeesList.update(meteorId, {
          $set: { directSupervisor: employeeDirectSupervisorVar },
        });
      }//end if



      console.log("Commiting changes")



    }
  }, //end submit form
}); //End editEmployee.events






} //end isClient
