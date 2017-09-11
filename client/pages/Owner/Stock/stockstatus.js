Meteor.subscribe('Stock');





Template.stockstatus.helpers({
    limitamountvalue() {return Session.get('amountvaluetarget')}
});

Template.stockstatus.events({
    'click #buttonamountvalue': function(event){
     event.preventDefault();
    var amountvalue = parseInt(document.getElementById("amountvalue").value);
      Session.set('amountvaluetarget',Stock.find( { Amount: { $gt: 0, $lt: amountvalue } } ).fetch());

}
  });









Template.stockstatus.helpers({
  mdata1: function() {
    return Stock.find({}).count();
  }
});

Template.stockstatus.helpers({
    mdata() {
        return Session.get('searchArray');
    },
    mdata1() {
        return Session.get('searchArray2');
    },
    mdata2() {
        return Session.get('Total');
    },
    mdata3() {
        return Session.get('Total2');
    }

});

Template.stockstatus.events({
    'click #button': function(event){

     event.preventDefault();



      Session.set('searchArray',Stock.find({}).fetch());
      Session.set('searchArray2',Stock.find({}).count());

      var total = 0;
      Stock.find({}).fetch().map(function(doc) {
        total += +doc.Deilar_Total_Price;
         Session.set('Total',total);

      });
      var total2 = 0;
      Stock.find({}).fetch().map(function(doc) {
        total2 += +doc.Custmer_Total_Price;
         Session.set('Total2',total2);

      });

}
  });
//Expiery Date

  Template.stockstatus.helpers({
      expiery() {return Session.get('expierydate')}
  });

  Template.stockstatus.events({
      'click #button1': function(event){
       event.preventDefault();
        var start = new Date();
        var test=moment(start).add('months',2);
        Session.set('expierydate',Stock.find({ 'expirydate' : { $gte : moment(start).format("MM/DD/YYYY"), $lt:moment(test).format("MM/DD/YYYY") }}).fetch());

  }
    });


    Template.stockstatus.helpers({
      patientBills: function() {

        return PatientBillsDatails.find({})
      }

    });
