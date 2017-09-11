


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

AddPatientBill = new Mongo.Collection('addPatientBill');
AddPatientBill.allow({
   insert: function(userId, doc){
      return !!userId;
},
update: function(userId, doc){
   return !!userId;
}

});
