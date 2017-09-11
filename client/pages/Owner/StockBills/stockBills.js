

    Meteor.subscribe('mdata');
    Meteor.subscribe('PatientBills');





      Template.StockBills.helpers({
          mdata() {
              return Session.get('searchArray');
          },
          mdata1() {
              return Session.get('searchArray2');
          }

      });

      Template.StockBills.events({
          'click #button': function(event){

           event.preventDefault();
            var start = document.getElementById("start").value;
            var end = document.getElementById("end").value;


            Session.set('searchArray',AddPatientBill.find({ 'createdAt' : { $gte : start, $lt: end }}).fetch());
            Session.set('searchArray2',AddPatientBill.find({ 'createdAt' : { $gte : start, $lt: end }}).count());


            var Amounttotal = 0;
            AddPatientBill.find({ 'createdAt' : { $gte : start, $lt: end }}).fetch().map(function(doc) {
              Amounttotal += +doc.total;
               totalAmount.value=Amounttotal;

            });


      }
        });


        Template.StockBills.rendered=function() {
        	$('#start').datepicker();
          $('#end').datepicker();
        }
