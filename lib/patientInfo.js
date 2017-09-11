


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

PatientInfo = new Mongo.Collection('patientInfo');
PatientInfo.allow({
   insert: function(userId, doc){
      return !!userId;
},
remove: function(userId, doc){
   return !!userId;
},
update: function(userId, doc){
   return !!userId;
}

});





if ( Meteor.isServer ) {
  PatientInfo._ensureIndex( { name: 1, age: 1, sex: 1 } );
}


let PatientInfoSchema = new SimpleSchema({

  name: {
    type:String,
    label:"name"
  },

  age: {
    type:String,
    label:"age"
  },
  sex: {
    type:String,
    label:"sex"
  },
  work: {
    type:String,
    label:"work"
  },
  phone: {
    type:String,
    label:"phone"
  }



});

PatientInfo.attachSchema(PatientInfoSchema);
