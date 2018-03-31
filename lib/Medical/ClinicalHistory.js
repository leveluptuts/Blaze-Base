


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

ClinicalHistory = new Mongo.Collection('clinicalHistory');
ClinicalHistory.allow({
   insert: function(userId, doc){
      return !!userId;
}

});


ClinicalHistorySchema = new SimpleSchema({

  patientId: {
    type:String,
    label:"patientId"
  },

  date: {
    type:String,
    label:"Date"
  }

});

ClinicalHistory.attachSchema(ClinicalHistorySchema);
