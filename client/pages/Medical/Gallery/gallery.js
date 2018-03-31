Meteor.subscribe('PersonalHistory');
Meteor.subscribe('Examination');
Meteor.subscribe('mangment');
Meteor.subscribe('PatientInfo');
Meteor.subscribe('Img');
Meteor.subscribe('images');



Template.gallery.helpers({
  mdata2: function() {
      var Patienttest= Session.get('Patienttest');
    return PatientInfo.findOne({_id:Patienttest});

  }


});
