Meteor.subscribe('PersonalHistory');
Meteor.subscribe('Examination');
Meteor.subscribe('mangment');
Meteor.subscribe('Medication');
Meteor.subscribe('PatientInfo');
Meteor.subscribe('Reservat');



Template.addMangment.events({
  'submit .add-Bill-info ':function (event ,result ) {
     event.preventDefault();




     var patientId= Session.get('id');
     var Dignoses= '';
     var Invistigations= '';
     var Comment= '';
     document.getElementById("buttonSave").disabled = false;
      document.getElementById("add-medication-info").disabled = false;
   //  var searchBox= event.target.searchBox.value;
   var date = new Date();




Mangment.insert({
        patientId: patientId,
        Dignoses: Dignoses,
        Invistigations: Invistigations,
        Comment: Comment,
        createdAt:moment(date).format("MM/DD/YYYY"),
        userId:Meteor.userId()



      }, function (error, result) {

    var getmangmentid = result;
     Session.set('mangmentId',getmangmentid);
    console.log(getmangmentid)
      });

       return false;
}

  });





Template.addMangment.helpers({
  mdata: function() {
    var id= FlowRouter.getParam('id');
    Session.set('id',id);
    return PatientInfo.findOne({_id:id});
  }

});




//add midication

Template.addMangment.events({
  'click #add-medication-info':function (event) {
     event.preventDefault();
     var patientId=Session.get('id');
       var mangmentId= Session.get('mangmentId');

       var medication = document.getElementById("medication").value;
       var medicationComment = document.getElementById("medicationComment").value;


    Medication.insert({
        patientId: patientId,
        mangmentId: mangmentId,
        medication: medication,
        medicationComment: medicationComment

      });
        //event.target.Dignoses.value= '';
      //  event.target.Invistigations.value= '';
      //  event.target.Comment.value= '';
       return false;

}

  });

// Medication Table

Template.addMangment.helpers({
  medicationtview: function() {
    var patientId=Session.get('id');
     var mangmentId= Session.get('mangmentId');
     console.log(mangmentId);
    return Medication.find({mangmentId:mangmentId});
  }
});

    Template.addMangment.events({
      'click #buttonSave': function(event){
   var mangmentId= Session.get('mangmentId');
   var Dignoses = document.getElementById("Dignoses").value;
   var Invistigations = document.getElementById("Invistigations").value;
   var Comment = document.getElementById("Comment").value;
   document.getElementById("buttonSave").disabled = true;
    document.getElementById("add-medication-info").disabled = true;

    Mangment.update({_id:mangmentId},
      {$set:{Dignoses: Dignoses ,Invistigations:Invistigations , Comment:Comment}});

FlowRouter.go('/mangment');
           return false;

    }


  });
        //event.target.Dignoses.value= '';
      //  event.target.Invistigations.value= '';
      //  event.target.Comment.value= '';



  Template.search1.rendered = function () {
    AutoCompletion.init("input#searchBox");
  }

  Template.search1.events = {
    'keyup input#searchBox': function () {
      AutoCompletion.autocomplete({
        element: 'input#searchBox',       // DOM identifier for the element
        collection: reservation,              // MeteorJS collection object
        field: 'TRADENAME',                    // Document field name to search for
        limit: 5,
                        // Max number of elements to show
        sort: { name: 1 }});
                   // Sort object to filter results with
        //filter: { 'gender': 'female' }}); // Additional filtering
    }
  }
