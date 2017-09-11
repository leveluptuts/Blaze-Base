


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








Antenatal = new Mongo.Collection('antenatal');
Antenatal.allow({
   insert: function(userId, doc){
      return !!userId;
}

});
