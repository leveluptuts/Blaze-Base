Meteor.methods({
	toggleAdmin(id) {
		if(Roles.userIsInRole(id, 'admin')) {
			Roles.removeUsersFromRoles(id, 'admin');
		} else {
			Roles.addUsersToRoles(id, 'admin');
		}		
	}
})