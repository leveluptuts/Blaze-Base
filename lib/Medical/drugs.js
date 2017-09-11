Drugs = new Mongo.Collection('drugs');
Drugs.allow({
   insert: function(userId, doc){
      return !!userId;
}

});
