Meteor.subscribe('mdata');
Meteor.subscribe('Reservation');


              Template.ProcedureBills.helpers({
                  mdata() {
                      return Session.get('searchArray');
                  },
                  mdata1() {
                      return Session.get('searchArray2');
                  }

              });

              Template.ProcedureBills.events({
                  'click #button': function(event){

                   event.preventDefault();
                    var start = document.getElementById("start").value;
                    var end = document.getElementById("end").value;
                      var dr_Id=Session.get('userID');

                    Session.set('searchArray',ProcedureBills.find({ 'createdAt' : { $gte : start, $lt: end } }).fetch());
                    Session.set('searchArray2',AddPatientBill.find({ 'createdAt' : { $gte : start, $lt: end }}).count());


                    var Amounttotal = 0;
                    AddPatientBill.find({ 'createdAt' : { $gte : start, $lt: end } , dr_Id :  dr_Id}).fetch().map(function(doc) {
                      Amounttotal += +doc.total;


                    });


              }
                });

                        Template.ProcedureBills.rendered=function() {
                        	$('#start').datepicker();
                          $('#end').datepicker();
                        }
