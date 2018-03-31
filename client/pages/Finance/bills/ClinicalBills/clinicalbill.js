Meteor.subscribe('mdata');
Meteor.subscribe('Reservation');
Meteor.subscribe('AddClinicBill');
Meteor.subscribe('ClinicalBillsDatails');

Template.ClinicalBills.helpers({
    mdata() {
        return Session.get('searchClinicBill');
    },
    mdata1() {
        return Session.get('CountClinicBill');
    }

});

Template.ClinicalBills.events({
    'click #button': function(event){

     event.preventDefault();
      var start = document.getElementById("start").value;
      var end = document.getElementById("end").value;
      Session.set('searchClinicBill',AddClinicBill.find({ 'createdAt' : { $gte : start, $lt: end }}).fetch());
      Session.set('CountClinicBill',AddClinicBill.find({ 'createdAt' : { $gte : start, $lt: end }}).count());

      var total = 0;
      AddClinicBill.find({ 'createdAt' : { $gte : start, $lt: end }}).fetch().map(function(doc) {
        total += +doc.total;
         Session.set('Total',total);
         Total.value=total;
      });

}
  });


  Template.ClinicalBills.rendered=function() {
  	$('#start').datepicker();
    $('#end').datepicker();
  }
