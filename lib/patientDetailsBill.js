


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

PatientDetailsBill = new Mongo.Collection('patientDetailsBill');
PatientDetailsBill.allow({
   insert: function(userId, doc){
      return !!userId;
}

});

 PatientDetailsBillSchema = new SimpleSchema({

  BillId: {
    type:String,
    label:"BillId"
  },

  item: {
    type:String,
    label:"item"
  },

  unit: {
    type:String,
    label:"unit"
  },

  amount: {
    type:String,
    label:"amount"
  }


});

PatientDetailsBill.attachSchema(PatientDetailsBillSchema);
