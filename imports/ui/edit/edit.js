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
    'selectedId': function(){
      var selectedId = FlowRouter.current().params.employeeUrl;
      return EmployeesList.findOne({ employeeId: selectedId });
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

    'click #deleteEmployeeButton': function () {
      //Delete Confirmation
      if (confirm("Are you sure you want to delete this employee?")){
        if (confirm("Are you really sure?")){
          var selectedId = FlowRouter.current().params.employeeUrl;
          var selectedEmployee = EmployeesList.findOne({ employeeId: selectedId });
          //console.log(selectedEmployee)
          var meteorId = Session.get('selectedEmployee');
          //console.log("meteor ID:"+meteorId)

          EmployeesList.remove({ _id: meteorId });

          //INSERT CONFIRM DELETE BOX here
          console.log("Deleting Employee #:"+selectedId)
          //DELETE EMPLOYEE HERE

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


  }); //End editEmployee.events







} //end isClient
