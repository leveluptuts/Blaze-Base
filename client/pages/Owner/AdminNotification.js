

Template.AdminNotification.onCreated(function(){
	this.autorun(() => {
		this.subscribe('Reservation');
	});
});

Template.AdminNotification.onCreated(function(){
	this.autorun(() => {
		this.subscribe('LimitationAmount');
	});
});



Template.AdminNotification.helpers({
	// Reservation Status
  reservationcounter: function() {
    var today = new Date();
    return Reservation.find({'date':moment(today).format("MM/DD/YYYY")}).count();


//End  Reservation Status
},


// Bills Status
ProcedureBillsCounter: function() {
	var today = new Date();
	return ProcedureBills.find({'createdAt':moment(today).format("MM/DD/YYYY")}).count();
},
StockBillsCounter: function() {
	var today = new Date();
	return PatientBillsDatails.find({'createdAt':moment(today).format("MM/DD/YYYY")}).count();


},
FacilityBillsCounter: function() {
	var today = new Date();
	return AddClinicBill.find({'createdAt':moment(today).format("MM/DD/YYYY")}).count();

// End Bills Status
},

mdata26: function() {
var totalpatientbill = 0;
  var today = new Date();

  return AddPatientBill.find({createdAt:moment(today).format("MM/DD/YYYY")}).fetch().map(function(doc) {

    totalpatientbill += +doc.total;
    console.log(totalpatientbill);
      Total2.value=totalpatientbill;
  });
},
mdata27: function() {
var today = new Date();
  return AddPatientBill.find({createdAt:moment(today).format("MM/DD/YYYY")}).count();
},

stockExpiery: function() {
var start = new Date();
var test=moment(start).add('months',2);
return Stock.find({ 'expirydate' : { $gte : moment(start).format("MM/DD/YYYY"), $lt:moment(test).format("MM/DD/YYYY") }}).fetch();

},
stockQuantaty: function() {
	return LimitationAmount.findOne();

},


ActiveStaff: function() {

var today = new Date();
return Attendance.find({date:moment(today).format("MM/DD/YYYY")}).fetch();

}

});


Template.AdminNotification.events({
    'click #buttonShow': function(event){

     event.preventDefault();


		  var today = new Date();
		  var total = 0;
			  var total2 = 0;
				  var total3 = 0;
					var total5= 0;
	   Reservation.find({'date':moment(today).format("MM/DD/YYYY")}).fetch().map(function(doc) {
		 				total += +doc.price;
		 			 Total.value=total;

		 });
		 AddPatientBill.find({'createdAt':moment(today).format("MM/DD/YYYY")}).fetch().map(function(doc) {
						total2 += +doc.stockbillamount;

					 StockTransactionAmount.value=total2;

		 });
		 AddPatientBill.find({'createdAt':moment(today).format("MM/DD/YYYY")}).fetch().map(function(doc) {
					 total5 += +doc.Procedurebillamount;

					ProceduresBillsAmount.value=total5;

		});
		 AddClinicBill.find({'createdAt':moment(today).format("MM/DD/YYYY")}).fetch().map(function(doc) {
					 total3 += +doc.total;

					ClinicBillsAmount.value=total3;
		});



}
  });

	Template.AdminNotification.helpers({
	    limitamountvalue() {return Session.get('amountvaluetarget')}
	});

	Template.AdminNotification.events({
	    'click #btnStocklimitation': function(event){
	     event.preventDefault();
	    var amountvalue = parseInt(document.getElementById("LimitationAmount").value);
	      Session.set('amountvaluetarget',Stock.find( { Amount: { $gt: 0, $lt: amountvalue } } ).fetch());

	}
	  });
