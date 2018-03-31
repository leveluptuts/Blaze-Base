
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


Images = new FS.Collection("Images", {
  stores: [new FS.Store.GridFS('Images')],

});

// If insecure removed add the following
Images.allow({
  insert: function(){return true;},
  update: function(){return true;},
  download: function(){return true;},
});

// mdata=> machine input data


Report = new Mongo.Collection('report');
Report.allow({
   insert: function(userId, doc){
      return !!userId;
}

});

Photos = new Mongo.Collection('photos');
Photos.allow({
   insert: function(userId, doc){
      return !!userId;
}

});




Lab = new Mongo.Collection('lab');
Lab.allow({
   insert: function(userId, doc){
      return !!userId;
},
remove: function(userId, doc){
   return !!userId;
}

});
