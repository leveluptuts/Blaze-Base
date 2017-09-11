
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

ProcedureBills = new Mongo.Collection('procedureBills');
ProcedureBills.allow({
   insert: function(userId, doc){
      return !!userId;
}

});
