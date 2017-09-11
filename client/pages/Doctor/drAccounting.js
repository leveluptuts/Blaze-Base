Meteor.subscribe('mdata');
Meteor.subscribe('Reservation');
Meteor.subscribe('Doctors');




  Template.drAccounting.helpers({

      mdata() {
          return Session.get('searchArray');
      },
      mdata1() {
          return Session.get('searchArray2');
      },
      mdata3() {
          return Session.get('userID');
      },
      mdata4() {
          return Session.get('DrInfo');
      }

  });

  Template.drAccounting.events({
      'click #button': function(event){

       event.preventDefault();
        var start = document.getElementById("start").value;
        var end = document.getElementById("end").value;

        var dr_Id=Session.get('userID');

 Session.set('DrInfo',Doctors.findOne({dr_Id:dr_Id}));
        Session.set('searchArray',Reservation.find({ 'date' : { $gte : start, $lt: end }, dr_Id :  dr_Id}).fetch());
        Session.set('searchArray2',Reservation.find({ 'date' : { $gte : start, $lt: end },dr_Id : dr_Id}).count());


  }
    });

    Template.drAccounting.events({
        'click #buttonShow': function(event){

         event.preventDefault();
         var start = document.getElementById("start").value;
         var end = document.getElementById("end").value;
        var dr_Id=Session.get('userID');
        var dr_precentage=Session.get('percentage');
        console.log(dr_precentage);


          var total = 0;
          Reservation.find({ 'date' : { $gte : start, $lt: end }, dr_Id : dr_Id}).fetch().map(function(doc) {
            total += +doc.price;
            console.log(total);
            var percentage = document.getElementById("percentage").value;
            var total2= total*percentage;
            console.log(total2);
            clinicamount.value= total -total2;

             Total.value=total2;

          });

    }
      });








    Template.search7.rendered = function () {
      AutoCompletion.init("input#searchBox");
    }

    Template.search7.events = {
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


    Template.drAccounting.rendered=function() {
    	$('#start').datepicker();
      $('#end').datepicker();
    }
