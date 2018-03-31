


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

AddClinicBill = new Mongo.Collection('addClinicBill');
AddClinicBill.allow({
   insert: function(userId, doc){
      return !!userId;
},
update: function(userId, doc){
   return !!userId;
}

});

ClinicalBillsDatails = new Mongo.Collection('clinicalBillsDatails');
ClinicalBillsDatails.allow({
   insert: function(userId, doc){
      return !!userId;
},
update: function(userId, doc){
   return !!userId;
},
remove: function(userId, doc){
   return !!userId;
}

});
