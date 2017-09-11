


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Reservation = new Mongo.Collection('reservation');
Reservation.allow({
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
