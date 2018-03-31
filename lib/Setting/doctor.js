
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


Doctors = new Mongo.Collection('doctors');
Doctors.allow({
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
