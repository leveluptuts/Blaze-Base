Meteor.subscribe('PatientInfo');
Meteor.subscribe('AddPatientBill');
Meteor.subscribe('PatientBillsDatails');
Meteor.subscribe('Drugs');
Meteor.subscribe('ProcedureBills');


Template.addPatientBill.onCreated(function(){
	this.autorun(() => {
		this.subscribe('AddPatientBill');
	});
});

// Get New Bill ID
Template.addPatientBill.helpers({
  patientBills: function() {
    var Patienttest= Session.get('Patienttest');
    var Bill_ID= Session.get('Bill_ID');
    return PatientBillsDatails.find({Billid:Bill_ID})
  }
});
//End


// Get Patient Info by ID Receved from Flowrouter
Template.addPatientBill.helpers({
  mdata: function() {
    var id= FlowRouter.getParam('id');
    return PatientInfo.findOne({_id:id});
  }
});
//End

// Add New Patient Bill (Stock + Procedure )
Template.addPatientBill.events({
  'submit .add-Bill-info ':function (event ,result ) {
     event.preventDefault();
		 Session.set('TotalTProcedureBill',0);

		 				 Session.set('TotalStockBill',0);

		 var patientId= Session.get('Patienttest');
     var date = new Date();

AddPatientBill.insert({
        patientId: patientId,
        total:0,
				Procedurebillamount:0,
				stockbillamount:0,
        createdAt:moment(date).format("MM/DD/YYYY"),
        userId:Meteor.userId()

      }, function (error, result) {

    var Bill_Id = result;
     Session.set('Bill_ID',Bill_Id);

      });
			document.getElementById("buttonItem").disabled = false;
			document.getElementById("ButtonAddProcedure").disabled = false;

       return false;
}
  });
// End Add New Patient Bill (Stock + Procedure )



// Patient Bill Details

  Template.addPatientBill.events({
    'click #ButtonAdd':function (event) {

       event.preventDefault();
        var Bill_ID= Session.get('Bill_ID');
        var item = document.getElementById("searchBox").value;
        var unit= document.getElementById("unit").value;
        var price= document.getElementById("price").value;
        var itemId= document.getElementById("_id").value;
        var amount=parseInt(document.getElementById("amount").value);

        var requierdamount= parseInt(document.getElementById("requierdamount").value);

        var newamount= amount - requierdamount;
        var totalprice= price*requierdamount;
        var date = new Date();
        document.getElementById("buttonSave").disabled = false;
        document.getElementById("ButtonAdd").disabled = true;
document.getElementById("btnvaldiatestockamount").disabled = true;
  PatientBillsDatails.insert({
          Billid: Bill_ID,
          itemId:itemId,
          item:item,
          unit:unit,
          amount:amount,
          price:totalprice,
          requierditemamount:requierdamount,
          createdAt:moment(date).format("MM/DD/YYYY")

        });
  Stock.update({_id:itemId},
           {$set:{Amount: newamount}}
         );

         var totalstockbill = 0;
  PatientBillsDatails.find({Billid:Bill_ID}).fetch().map(function(doc) {
          totalstockbill += +doc.price;
          console.log('totalstockbill'+totalstockbill);
           Session.set('TotalStockBill',totalstockbill);
           TotalStockBill.value=totalstockbill;
        });
  }
    });
// End Patient Details Bill

// Procedure Bill
Template.addPatientBill.events({
  'submit .add-Bill_Procedure-info':function (event) {

     event.preventDefault();
      var Bill_ID= Session.get('Bill_ID');
      var Handskill= parseInt(event.target.Handskill.value);
      var Anaesthesia= parseInt(event.target.Anaesthesia.value);
			var DrName= event.target.DrName.value;
			var procedurename= event.target.procedurename.value;

      var or= parseInt(event.target.or.value);
      var Assistance= parseInt(event.target.Assistance.value);
      var Accomoadation= parseInt(event.target.Accomoadation.value);
document.getElementById("buttonSave").disabled = false;
var TotalTProcedureBill =Handskill+Anaesthesia+or+Assistance+Accomoadation;
Session.set('TotalTProcedureBill',TotalTProcedureBill);
TotalProcedureBill.value=TotalTProcedureBill;
var date = new Date();

ProcedureBills.insert({
        Billid: Bill_ID,
        Handskill:Handskill,
        Anaesthesia:Anaesthesia,
        or:or,
        Assistance:Assistance,
        Accomoadation:Accomoadation,
				DrName:DrName,
				procedurename:procedurename,
TotalProcedureBill:TotalTProcedureBill,
createdAt:moment(date).format("MM/DD/YYYY")
      });

document.getElementById("ButtonAddProcedure").disabled = true;
}
  });


// End Procedure Bill


// Editing Patient Bill Details Items
    Template.addPatientBill.helpers({
      editing: function(){
        return Session.equals('editItemId', this._id);
      }
    });

    Template.addPatientBill.events({
      'click #buttonDelete': function(){
var totalstockbill = 0;
        PatientBillsDatails.remove(this._id);
        var deletitemid=this.itemId;
        var stockamountafterrequest=parseInt(this.stockamountafterrequest);
        var requierditemamount=parseInt(this.requierditemamount);
        var Bill_ID= Session.get('Bill_ID');
      var myDocument=  PatientBillsDatails.find({Billid:Bill_ID}).fetch().map(function(doc) {



  totalstockbill += +doc.price;

        });
								 Session.set('TotalStockBill',totalstockbill);
							TotalStockBill.value=totalstockbill;

        Stock.update({_id:deletitemid},
          {$inc:{Amount: requierditemamount}});

      }

    });


    Template.addPatientBill.helpers({
      teams: function(){
        return Stock.find();

      }
    });

// Update New Patient Bill
    Template.addPatientBill.events({
      'click #buttonSave': function(event){
   var Bill_ID= Session.get('Bill_ID');

Session.set('StockItem',0);
Session.set('Bill_ID',0);
	 var 	TotalProcedureBill=Session.get('TotalTProcedureBill') ;
	 var 	TotalStockBill=Session.get('TotalStockBill') ;
   var BillAmount=TotalProcedureBill+TotalStockBill
    AddPatientBill.update({_id:Bill_ID},
      {$set:{total: BillAmount,Procedurebillamount:TotalProcedureBill,stockbillamount:TotalStockBill}});


      document.getElementById("buttonItem").disabled = true;
      document.getElementById("ButtonAdd").disabled = true;
      document.getElementById("buttonSave").disabled = true;
      document.getElementById("buttonDelete").disabled = true;
      var id= Session.get('Patienttest');
       console.log(id);
       FlowRouter.go("/");

           return false;
    }
  });




  Template.search4.rendered = function () {
    AutoCompletion.init("input#searchBox");
  }

  Template.search4.events = {
    'keyup input#searchBox': function () {
      AutoCompletion.autocomplete({
        element: 'input#searchBox',       // DOM identifier for the element
        collection: Stock,              // MeteorJS collection object
        field: 'Item',                    // Document field name to search for
        limit: 5,
                        // Max number of elements to show
        sort: { name: 1 }});
                   // Sort object to filter results with
        //filter: { 'gender': 'female' }}); // Additional filtering
    }
  }


    Template.addPatientBill.events({
        'click #buttonItem': function(event){

          var Item = document.getElementById("searchBox").value;
          Session.set('StockItem',Stock.findOne({Item:Item}));
document.getElementById("btnvaldiatestockamount").disabled = false;



}
      });


// Get Total Bill Amount
			Template.addPatientBill.events({
					'click #btnCalculateTotalBill': function(event){
						var 	TotalProcedureBill=Session.get('TotalTProcedureBill') ;
						var 	TotalStockBill=Session.get('TotalStockBill') ;

TotalBillAmount.value=TotalProcedureBill + TotalStockBill;


			}
				});

      Template.addPatientBill.helpers({
          stItem() {
              return Session.get('StockItem');
          }

      });

// btnvaldiatestockamount
Template.addPatientBill.events({
		'click #btnvaldiatestockamount': function(event){
			 event.preventDefault();
			var amount = parseInt(document.getElementById("amount").value);
			var requierdamount = parseInt(document.getElementById("requierdamount").value);



btnvaldiatestockamount
			if(requierdamount>amount){
			document.getElementById("ButtonAdd").disabled = true;
			}
			else {
				document.getElementById("ButtonAdd").disabled = false;
			};


}
	});
