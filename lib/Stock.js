


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);




Stock = new Mongo.Collection('stock');
Stock.allow({
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
Stock.allow({

  update: () => false,
  remove: () => false
});
