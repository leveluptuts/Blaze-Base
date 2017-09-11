Meteor.subscribe('PersonalHistory');
Meteor.subscribe('Examination');
Meteor.subscribe('mangment');
Meteor.subscribe('PatientInfo');



  Template.AntenatalHistory.helpers({
    mdata: function() {
      var Patienttest= Session.get('Patienttest');
    return PatientInfo.findOne({_id:Patienttest});

    },

      ClinicalHistory: function() {
        var Patienttest= Session.get('Patienttest');
        return Antenatal.find({ patientId: Patienttest });
      }
});
