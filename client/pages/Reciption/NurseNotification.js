
Template.NurseNotification.onCreated(function(){
	this.autorun(() => {
		this.subscribe('Reservation');
	});
});
Template.NurseNotification.helpers({
  reservPatients: function() {
		var today = new Date();
	    return Reservation.find({date:moment(today).format("MM/DD/YYYY")},{sort:{createdAt: -1}});
	  },

	});

Template.NurseNotification.events({
  'click .deleteItem': function(){
    Reservation.remove(this._id);
  },
	'click .editItem': function(){
		Session.set('editItemId',this._id);
		document.getElementById("editeitemtime").disabled = false;


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
    }
    else if(e.keyCode === 27){
      Session.set('editItemId', null);
    }
  }

});




  var saveItem = function(){
    var editItem = {
      time: $("#editeitemtime").val(),


		}

		Reservation.update(Session.get('editItemId'), {$set: editItem});
		 Session.set('editItemId', null);
	 }
