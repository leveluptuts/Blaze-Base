


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

PatientBills = new Mongo.Collection('patientBills');
PatientBills.allow({
   insert: function(userId, doc){
      return !!userId;
},
update: function(userId, doc){
   return !!userId;
}

});


PatientBills.allow({


  remove: () => false
});

PatientBills.deny({

  remove: () => true
});



if ( Meteor.isServer ) {
  PatientBills._ensureIndex( { item: 1, total: 1, patientId: 1 } );
}
