
Template.Users.onCreated(function(){
	this.autorun(() => {
		this.subscribe('allUsers');
	});
});

Template.Users.helpers({
	users: function() {
		return Meteor.users.find();
	},
	userEmail: function() {
		return this.emails[0].address;
	},
	isAdmin: function() {
		return Roles.userIsInRole(this._id, 'admin') ? 'admin' : '';
	},
	dateFormat: function() {
		return moment(this.createdAt).format('MMMM D YYYY');
	},
	editMode: function() {
		return Session.get('currentUser') ? 'edit-mode' : '';
	},
	currentEdit: function() {
		let user = Session.get('currentUser');
		return user._id === this._id;
	}
});

Template.Users.events({

  'click .deleteItem': function(){
    users.remove(this._id);
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
    }
    else if(e.keyCode === 27){
      Session.set('editItemId', null);
    }
  }
});
