import { Meteor } from 'meteor/meteor';
console.log("THIS IS MAIN.JS - SERVER")

Meteor.publish('employees', function () {
           return EmployeesList.find();
           });
