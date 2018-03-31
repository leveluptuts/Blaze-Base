


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








Examination = new Mongo.Collection('examination');
Examination.allow({
   insert: function(userId, doc){
      return !!userId;
}

});
