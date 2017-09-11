Meteor.subscribe('mdata');
Meteor.subscribe('Reservation');



Template.reservationhistory.helpers({
  mdata: function() {
    var id= FlowRouter.getParam('id');

    return Reservation.find({patientId:id});


  }
});
