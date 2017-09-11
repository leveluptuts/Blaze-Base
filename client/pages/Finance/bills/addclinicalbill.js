Meteor.subscribe('AddClinicBill');
Meteor.subscribe('ClinicalBillsDatails');


Template.addclinicalbill.events({
  'submit .add-Bill-info ':function (event ,result ) {
     event.preventDefault();
     var total=0;
     var date = new Date();
document.getElementById("buttonAdd").disabled = false;
document.getElementById("buttunSave").disabled = false;
AddClinicBill.insert({
        total:0,
        createdAt:moment(date).format("MM/DD/YYYY"),
        userId:Meteor.userId()
      }, function (error, result) {
    var ClinicBillid = result;
     Session.set('ClinicBillId',ClinicBillid);
      });

       return false;
}

  });

  Template.addclinicalbill.events({
    'submit .add-Clinic-Bill-info':function (event) {

       event.preventDefault();
        var ClinicBillId= Session.get('ClinicBillId');
        var item = event.target.item.value;
        var amount= event.target.amount.value;
        var price= event.target.price.value;
        var comment= event.target.comment.value;

  ClinicalBillsDatails.insert({
          ClinicBillId: ClinicBillId,
          item:item,
          amount:amount,
          price:price,
          comment:comment


        });

        var total = 0;
        ClinicalBillsDatails.find({ClinicBillId:ClinicBillId}).fetch().map(function(doc) {
          total += +doc.price;
           Session.set('Total',total);
           Total.value=total;

        });

  }

    });

    Template.addclinicalbill.helpers({
      ClinicBills: function() {

        var ClinicBillId= Session.get('ClinicBillId');
        return ClinicalBillsDatails.find({ClinicBillId:ClinicBillId})
      }
    });

    Template.addclinicalbill.events({
      'click #buttunSave': function(event){
   var ClinicBillId= Session.get('ClinicBillId');
   var price= Session.get('Total');
   document.getElementById("buttonAdd").disabled = true;
   document.getElementById("buttunSave").disabled = true;
    AddClinicBill.update({_id:ClinicBillId},
      {$set:{total: price}});

           return false;
    }
  });


  Template.addclinicalbill.events({
    'click .deleteItem': function(){
      ClinicalBillsDatails.remove(this._id);
      var total = 0;
      var ClinicBillId= Session.get('ClinicBillId');
      ClinicalBillsDatails.find({ClinicBillId:ClinicBillId}).fetch().map(function(doc) {
        total += +doc.price;
         Session.set('Total',total);
         Total.value=total;

      });
    },

    'click .editItem': function(){

  },

  });
