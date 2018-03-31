Meteor.subscribe('PersonalHistory');
Meteor.subscribe('Examination');
Meteor.subscribe('mangment');
Meteor.subscribe('PatientInfo');





Template.mangment.helpers({
  mdata: function() {
    var Patienttest= Session.get('Patienttest');
  return PatientInfo.findOne({_id:Patienttest});

  },
  mdata2: function() {
    return Mangment.find({},{sort:{createdAt: -1}});


  }

});
