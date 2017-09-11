Meteor.subscribe('Attendance');
Meteor.subscribe('Reservation');
Meteor.subscribe('Doctors');



Template.sallery.helpers({
    Reservation() {
        return Session.get('searchArray');
    },
     Procedure() {
          return Session.get('searchArray2');
      },
       Doctor() {
            return Session.get('Doctor');
        }

});

Template.sallery.events({
    'click #button': function(event){

     event.preventDefault();

Session.set('TotalDelayDeduction',0);
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var drname = document.getElementById("searchBox").value;
    var totalmin=0;
    var totalhour=0;
    Session.set('Doctor',Doctors.findOne({drname:drname}));
    Session.set('searchArray2',ProcedureBills.find({ 'createdAt' : { $gte : start, $lt: end }, DrName :  drname}).fetch());
    Session.set('ReservationCount',Reservation.find({ 'date' : { $gte : start, $lt: end }, drName :  drname}).count());
    Session.set('searchArray',Reservation.find({ 'date' : { $gte : start, $lt: end }, drName : drname}).fetch());

    Attendance.find({'date' : { $gte : start, $lt: end }, Drname :drname }).fetch().map(function(doc) {
      totalmin += +doc.humanReadable.minutes ;
      totalhour += +doc.humanReadable.hours ;
      var hourtoMin = totalhour*'60' ;
      var TotalDelayPerMin =totalmin + hourtoMin;
      var TotalDelayDeduction= TotalDelayPerMin*'2'
      Session.set('TotalDelayDeduction',TotalDelayDeduction)
      console.log('TotalDelayPerMin'+TotalDelayPerMin);
      console.log('TotalDelayDeduction'+TotalDelayDeduction);


    });

}
  });



  Template.sallery.rendered=function() {
    $('#start').datepicker();
    $('#end').datepicker();
  }



//Loan


Template.sallery.events({
    'click #buttonloan': function(event){

     event.preventDefault();
     var start = document.getElementById("start").value;
     var end = document.getElementById("end").value;
     var drname = document.getElementById("searchBox").value;
     var ReservationPercentage = document.getElementById("ReservationPercentage").value;
     var TaxesPercentage = document.getElementById("TaxesPercentage").value;
     var ProcedurePercentage = document.getElementById("ProcedurePercentage").value;

      var totalloan = 0;
      var totaldeduction=0;
      var totalReservation=0;
      var totalProcedure=0;


      Loan.find({'createdAt' : { $gte : start, $lt: end }, membername :drname }).fetch().map(function(doc) {
        totalloan += +doc.loan;
        //console.log(totalloan);
        TotalLoan.value=totalloan;
      });

      Deduction.find({'createdAt' : { $gte : start, $lt: end }, membername :drname }).fetch().map(function(doc) {
        totaldeduction += +doc.deduction;
      //  console.log(totaldeduction);
var test =Session.get('TotalDelayDeduction');
        Deducation.value=totaldeduction+test;
      });

      Reservation.find({'date' : { $gte : start, $lt: end }, drName :drname }).fetch().map(function(doc) {
        totalReservation += +doc.price;
      //  console.log('reservation'+totalReservation);
        TotalReservation.value=totalReservation*ReservationPercentage;
      });

      ProcedureBills.find({'createdAt' : { $gte : start, $lt: end }, DrName :drname }).fetch().map(function(doc) {
        totalProcedure += +doc.Handskill;
      //  console.log('Procedure'+totalProcedure);
        TotalProcedure.value=totalProcedure*ProcedurePercentage;
      });


var test =Session.get('TotalDelayDeduction');
    var incom= totalReservation*ReservationPercentage + totalProcedure*ProcedurePercentage;
    var Ttaxess=incom*TaxesPercentage;
        TotalTaxes.value=Ttaxess;

         var Totaldeductamount = totaldeduction+test+Ttaxess+totalloan;
         SalleryAmount.value=incom-Totaldeductamount;
}
  });


// Search For staff name


    Template.search03.rendered = function () {
      AutoCompletion.init("input#searchBox");
    }

    Template.search03.events = {
      'keyup input#searchBox': function () {
        AutoCompletion.autocomplete({
          element: 'input#searchBox',       // DOM identifier for the element
          collection: Doctors,              // MeteorJS collection object
          field: 'drname',                    // Document field name to search for
          limit: 5,
                          // Max number of elements to show
          sort: { name: 1 }});
                     // Sort object to filter results with
          //filter: { 'gender': 'female' }}); // Additional filtering
      }
    }
