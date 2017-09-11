Meteor.subscribe('Doctors');
Meteor.subscribe('Staffe');
Meteor.subscribe('StaffeDelay');
Meteor.subscribe('AttendTime');
Meteor.subscribe('Loan');
Meteor.subscribe('Deduction');
Meteor.subscribe('LimitationAmount');


Template.setting.helpers({
  mdata: function() {
    return Doctors.find({});
  },
  editing:function(){
    return Session.equals('editItemId',this._id);
  },
  LimitAmount: function() {
    return LimitationAmount.find({});
  },

  editing2:function(){
    return Session.equals('editItemId2',this._id);
  }
});

Template.setting.events({
  'click .deleteItem': function(){
    Doctors.remove(this._id);
  },
  'click .editstocklimit': function(){
    Session.set('editItemId2',this._id);
  },
  'click .editItem': function(){
    Session.set('editItemId',this._id);


},
'click .cancelItem': function(){
  Session.set('editItemId',null);


},
  'click .saveItem': function(){
    saveItem();
  },
  'keypress input': function(e){
    if(e.keyCode === 13){
      saveItem();
      saveItem2();
    }
    else if(e.keyCode === 27){
      Session.set('editItemId', null);
    }
  }
});




Template.setting.events({
  'click #DoctorDetails':function (event) {
     event.preventDefault();
     var drname = document.getElementById("drname").value;
     var visita = document.getElementById("visita").value;
     var dr_Id = document.getElementById("dr_Id").value;
     var percentage = document.getElementById("percentage").value;
     var percentageProcedure= document.getElementById("percentageProcedure").value;
     var Taxes =document.getElementById("Taxes").value;
      Doctors.insert({
        drname: drname,
        dr_Id:dr_Id,
        visita: visita,
        percentage: percentage,
        percentageProcedure:percentageProcedure,
        Taxes:Taxes,
        userId:Meteor.userId()
      });

       return false;

}

  });

  // Loan
  Template.setting.events({
    'click #btnLoan':function (event) {
       event.preventDefault();
       var membername = document.getElementById("searchBox006").value;
       var loan = document.getElementById("loanAmount").value;
 var date=new Date();
        Loan.insert({
          membername: membername,
          loan:loan,
          createdAt:moment(date).format("MM/DD/YYYY"),
          userId:Meteor.userId()
        });

         return false;

  }

    });

    //Deduction
      Template.setting.events({
        'click #btnDeduction':function (event) {
           event.preventDefault();
           var membername = document.getElementById("searchBox").value;
           var Deduct= document.getElementById("deductionAmount").value;
           var date=new Date();

            Deduction.insert({
              membername: membername,
              deduction:Deduct,
              createdAt:moment(date).format("MM/DD/YYYY"),
              userId:Meteor.userId()
            });

             return false;

      }

        });



  Template.setting.events({
    'click .update-Attend-Time ':function (event) {
       event.preventDefault();
       var time=new Date();

        AttendTime.insert({
          time:time,

          userId:Meteor.userId()
        });
         return false;

  }

    });

    Template.setting.rendered=function() {
      $('#start').datepicker();

    }
    var saveItem = function(){
      var editItem = {
        drname: $("#editeitemdrname").val(),
        visita: $("#editeitemvisita").val(),
        percentage: $("#editeitempercentage").val(),
      }

      Doctors.update(Session.get('editItemId'), {$set: editItem});
       Session.set('editItemId', null);
     }

     var saveItem2 = function(){
       var editItem2 = {
         notificationvalue: $("#editeStockItem").val(),

       }

       LimitationAmount.update(Session.get('editItemId2'), {$set: editItem2});
        Session.set('editItemId2', null);
      }



      Template.search005.rendered = function () {
        AutoCompletion.init("input#searchBox");
      }

      Template.search005.events = {
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

      Template.search006.rendered = function () {
        AutoCompletion.init("input#searchBox006");
      }

      Template.search006.events = {
        'keyup input#searchBox006': function () {
          AutoCompletion.autocomplete({
            element: 'input#searchBox006',       // DOM identifier for the element
            collection: Doctors,              // MeteorJS collection object
            field: 'drname',                    // Document field name to search for
            limit: 5,
                            // Max number of elements to show
            sort: { name: 1 }});
                       // Sort object to filter results with
            //filter: { 'gender': 'female' }}); // Additional filtering
        }
      }
