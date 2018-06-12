import { Meteor } from 'meteor/meteor'

import '../imports/ui/home/home.html';
import '../imports/ui/home/home.js';
import '../imports/ui/roster/roster.html';
import '../imports/ui/roster/roster.js';
import '../imports/ui/metrics/metrics.html';
import '../imports/ui/metrics/metrics.js';
import '../imports/ui/edit/edit.html';
import '../imports/ui/edit/edit.js';

if(Meteor.isClient){
  console.log("is client");
}
