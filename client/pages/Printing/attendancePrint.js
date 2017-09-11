
Meteor.subscribe('Attendance');







Template.AttendancePrevewPrint.helpers({
    Attendance1() {
        return Session.get('Attend');
    }

});
Template.AttendancePrevewPrint.events({
    'click #button': function(event){

     event.preventDefault();


    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var drname = document.getElementById("searchBox").value;
    document.getElementById("button").style.visibility='hidden' ;

    Session.set('Attend',Attendance.find({ 'date' : { $gte : start, $lt: end }, Drname :drname}).fetch());
}
  });



  Template.AttendancePrevewPrint.rendered=function() {
    $('#start').datepicker();
    $('#end').datepicker();
  }
  Template.search0004.rendered = function () {
    AutoCompletion.init("input#searchBox");
  }

  Template.search0004.events = {
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
