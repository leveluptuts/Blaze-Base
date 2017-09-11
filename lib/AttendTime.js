


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








AttendTime = new Mongo.Collection('attendTime');
AttendTime.allow({
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
