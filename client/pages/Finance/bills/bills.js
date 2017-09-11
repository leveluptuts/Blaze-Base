Meteor.subscribe('mdata');
Meteor.subscribe('Reservation');
Meteor.subscribe('Doctors');




  Template.bills.helpers({
    ReservatioSearch() {
        return Session.get('searchReservation');
    },
      mdata1() {
          return Session.get('CountReservation');
      },
      mdata3() {
          return Session.get('DoctorId');

      },
      allReservation(){
        return Reservation.find().fetch();

      }

  });

  Template.bills.events({
      'click #button': function(event){

       event.preventDefault();
        var start = document.getElementById("start").value;
        var end = document.getElementById("end").value;
        var drname = document.getElementById("searchBox").value;

        Session.set('DoctorId',Doctors.findOne({drname:drname}));
        Session.set('searchReservation',Reservation.find({ 'date' : { $gte : start, $lt: end },  drName :  drname}).fetch());
        Session.set('CountReservation',Reservation.find({ 'date' : { $gte : start, $lt: end }, drName : drname}).count());


  }
    });

    Template.bills.events({
        'click #buttonShow': function(event){

         event.preventDefault();
         var start = document.getElementById("start").value;
         var end = document.getElementById("end").value;
         var drname = document.getElementById("searchBox").value;

          var total = 0;
          Reservation.find({ 'date' : { $gte : start, $lt: end }, drName : drname}).fetch().map(function(doc) {
            total += +doc.price;
            console.log(total);
            var percentage = document.getElementById("percentage").value;
console.log(percentage);
            var total2=total*percentage;
            clinicamount.value=total *percentage;

             Total.value=total2;

          });

    }
      });









    Template.bills.rendered=function() {
    	$('#start').datepicker();
      $('#end').datepicker();
    }


    Template.search3.rendered = function () {
      AutoCompletion.init("input#searchBox");
    }

    Template.search3.events = {
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




Template.bills.events({
    'click #buttonPrint': function(event){

     event.preventDefault();
FlowRouter.go('/sallery');

}
  });
