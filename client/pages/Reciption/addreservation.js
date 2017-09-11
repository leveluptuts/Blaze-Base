Meteor.subscribe('PatientInfo');


Template.addReservation.helpers({
  mdata: function() {
    var id= FlowRouter.getParam('id');
    Session.set('id',id);
    return PatientInfo.findOne({_id:id});

  }


});

Template.addReservation.events({
  'submit .update-patient-info ':function (event) {
     event.preventDefault();
     var patientId=Session.get('id');
      var name= event.target.name.value;
      var dr_Id= event.target.dr_Id.value;
      var date= event.target.date.value;
      var time= event.target.time.value;
      var drName= event.target.searchBox.value;
      var type= event.target.type.value;
      var price= event.target.price.value;
      var waiting= 'waiting';





      Reservation.insert({
        patientId: patientId,
        name: name,
        date: date,
        time: time,
        drName:drName,
        type:type,
        price:price,
        dr_Id:dr_Id,
        status: waiting,
        createdAt:new Date()

      });

       return false;

}

  });
  Template.addReservation.rendered=function() {
  	$('#my-datepicker').datepicker();
  }


  Template.search2.rendered = function () {
    AutoCompletion.init("input#searchBox");
  }

  Template.search2.events = {
    'keyup input#searchBox': function () {
      AutoCompletion.autocomplete({
        element: 'input#searchBox',       // DOM identifier for the element
        collection: Doctors,              // MeteorJS collection object
        field: 'drname',                    // Document field name to search for
        limit: 5,
                        // Max number of elements to show
        sort: { name: 1 }});



    }

  }

  Template.addReservation.events({
      'click #button': function(event){

       event.preventDefault();

        var drname = document.getElementById("searchBox").value;

        Session.set('DoctorI',Doctors.findOne({drname:drname}));

}
        });


        Template.addReservation.helpers({
          dr() {
                return Session.get('DoctorI');
            }

        });
