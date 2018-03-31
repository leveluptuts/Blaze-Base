Meteor.subscribe('Attendance');
Meteor.subscribe('Reservation');
Meteor.subscribe('Doctors');



Template.deduction.helpers({
    Deduction() {
        return Session.get('searchDeduction');
    },
       Doctor() {
            return Session.get('Doctor');
        },
        Dellay() {
            return Session.get('searchDellay');
        },
        Loan() {
            return Session.get('searchLoan');
        }

});

Template.deduction.events({
    'click #button': function(event){

     event.preventDefault();

    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var drname = document.getElementById("searchBox").value;

    Session.set('Doctor',Doctors.findOne({drname:drname}));
    Session.set('searchDeduction',Deduction.find({ 'createdAt' : { $gte : start, $lt: end }, membername :  drname}).fetch());
    Session.set('searchDellay',Attendance.find({ 'date' : { $gte : start, $lt: end }, Drname :  drname}).fetch());
    Session.set('searchLoan',Loan.find({ 'createdAt' : { $gte : start, $lt: end }, membername :  drname}).fetch());



}
  });



  Template.deduction.rendered=function() {
    $('#start').datepicker();
    $('#end').datepicker();
  }




// Search For staff name


    Template.searchDeduction.rendered = function () {
      AutoCompletion.init("input#searchBox");
    }

    Template.searchDeduction.events = {
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
