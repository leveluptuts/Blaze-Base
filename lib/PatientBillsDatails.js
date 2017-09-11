


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

PatientBillsDatails = new Mongo.Collection('patientBillsDatails');
PatientBillsDatails.allow({
   insert: function(userId, doc){
      return !!userId;
},
remove: function(userId, doc){
   return !!userId;
}


});




PatientBillsDatails.allow({

  remove: () => false,

});

PatientBillsDatails.deny({

  update: () => true,

});
