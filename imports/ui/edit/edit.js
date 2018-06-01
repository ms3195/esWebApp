if(Meteor.isClient){

  Template.editEmployee.onRendered(function() {
    var selectedId = FlowRouter.current().params.employeeUrl;
    console.log("Pulling up Employee #:"+selectedId);
  });







  Template.editEmployee.helpers({
    //helper functions go here
    'selectedId': function(){
      var selectedId = FlowRouter.current().params.employeeUrl;
      return EmployeesList.findOne({ employeeId: selectedId });
    },
  });


  Template.editEmployee.events({
    // MOVE TO EDIT PAGE
    // 'click .remove': function(){
    //   var selectedEmployee = Session.get('selectedEmployee');
    //   EmployeesList.remove({ _id: selectedEmployee });
    // }

    'click #deleteEmployeeButton': function () {
      var selectedId = FlowRouter.current().params.employeeUrl;

//INSERT CONFIRM DELETE BOX here
console.log("Deleting Employee #:"+selectedId)
//DELETE EMPLOYEE HERE

      //redirect to roster
      FlowRouter.go("/roster");
    },

  });

} //end isClient
