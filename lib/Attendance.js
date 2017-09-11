


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








Attendance = new Mongo.Collection('attendance');
Attendance.allow({
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
