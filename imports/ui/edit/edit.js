Template.editEmployee.onRendered(function() {
  console.log("URL IS SUPPOSED TO BE AFTER THIS")
  console.log(FlowRouter.current().params);
  console.log("URL IS SUPPOSED TO BE BEFORE THIS")
});
