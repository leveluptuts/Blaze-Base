


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








Mangment = new Mongo.Collection('mangment');
Mangment.allow({
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
