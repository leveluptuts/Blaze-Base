
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


Staffe = new Mongo.Collection('staffe');
Staffe.allow({
   insert: function(userId, doc){
      return !!userId;
},
remove: function(userId, doc){
   return !!userId;
}

});


Deduction = new Mongo.Collection('deduction');
Deduction.allow({
   insert: function(userId, doc){
      return !!userId;
},
remove: function(userId, doc){
   return !!userId;
}

});

Loan = new Mongo.Collection('loan');
Loan.allow({
   insert: function(userId, doc){
      return !!userId;
},
remove: function(userId, doc){
   return !!userId;
}

});

LimitationAmount = new Mongo.Collection('limitationAmount');
LimitationAmount.allow({
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
