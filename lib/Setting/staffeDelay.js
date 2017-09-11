
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


StaffeDelay = new Mongo.Collection('staffeDelay');
StaffeDelay.allow({
   insert: function(userId, doc){
      return !!userId;
},
remove: function(userId, doc){
   return !!userId;
}

});
