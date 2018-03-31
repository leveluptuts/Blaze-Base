

Meteor.subscribe('PersonalHistory');
Meteor.subscribe('Examination');
Meteor.subscribe('Mangment');
Meteor.subscribe('PatientInfo');





Template.MangmentHistory.helpers({

  mdata2: function() {
    var id= FlowRouter.getParam('id');
var Patienttest= Session.get('Patienttest');

    return Mangment.find({ patientId: Patienttest });



  }

});
