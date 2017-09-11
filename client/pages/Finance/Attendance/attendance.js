
Meteor.subscribe('Attendance');



Template.attendance.helpers({
  Attend: function() {
    return Attendance.find({});
  }
});
