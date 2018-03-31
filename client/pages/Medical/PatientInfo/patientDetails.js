Meteor.subscribe('PatientInfo');



Template.PatientDetails.helpers({
  mdata: function() {
    var id= FlowRouter.getParam('id');
     Session.set('Patienttest',id);
    return PatientInfo.findOne({_id:id});

  }


});
Template.PatientDetails.events({
  'click #buttunUpdate': function(event){
var patientid= Session.get('Patienttest');

 var age = document.getElementById("age").value;
 var work = document.getElementById("work").value;
 var notes = document.getElementById("notes").value;
PatientInfo.update({_id:patientid},
  {$set:{age: age ,work:work, notes:notes}});

       return false;
}
});


Template.PatientDetails.events({
  'click #buttonDone': function(event){
var patientid= Session.get('Patienttest');

 var age = document.getElementById("age").value;
 var work = document.getElementById("work").value;
 var notes = document.getElementById("notes").value;
PatientInfo.update({_id:patientid},
  {$set:{age: age ,work:work, notes:notes}});

  Reservation.update({_id:patientid},
    {$set:{status: 'done' ,work:work, notes:notes}});

       return false;
}
});
