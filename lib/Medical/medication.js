


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);



Medication = new Mongo.Collection('medication');
Medication.allow({
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
