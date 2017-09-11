


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








PersonalHistory = new Mongo.Collection('personalHistory');
PersonalHistory.allow({
   insert: function(userId, doc){
      return !!userId;
}

});
