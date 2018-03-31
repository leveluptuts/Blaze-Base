

Template.DrNotification.onCreated(function(){
	this.autorun(() => {
		this.subscribe('Reservation');
	});
});
Template.DrNotification.helpers({
  reservPatients: function() {
    var drId=Session.get('userID');
		var today = new Date();
    return Reservation.find({ 'date' : moment(today).format("MM/DD/YYYY"), dr_Id : drId });



  },
	reservPatientscount: function() {
		var drId=Session.get('userID');
		var today = new Date();
		return Reservation.find({ 'date' : moment(today).format("MM/DD/YYYY"), dr_Id : drId }).count();



	}
});



Template.DrNotification.events({

	'click .editItem': function(){
		Session.set('editItemId',this._id);

		Reservation.update({_id:this._id},
			{$set:{status: 'done'}});

}

});
