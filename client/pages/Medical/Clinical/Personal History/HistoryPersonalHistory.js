Meteor.subscribe('PersonalHistory');
Meteor.subscribe('Examination');
Meteor.subscribe('mangment');
Meteor.subscribe('PatientInfo');



  Template.clinicalData.helpers({
    mdata: function() {
      var Patienttest= Session.get('Patienttest');
    return PatientInfo.findOne({_id:Patienttest});

    },

      ClinicalHistory: function() {
        var Patienttest= Session.get('Patienttest');

        return PersonalHistory.find({ patientId: Patienttest });

      }
});
