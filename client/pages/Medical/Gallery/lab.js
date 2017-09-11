Meteor.subscribe('Lab');
Meteor.subscribe('Images');
Meteor.subscribe('PatientInfo');


Template.lab.events({
  'change .uploadFileButton ':function (event, template) {
    FS.Utility.eachFile(event, function (file) {
      var newFile = new FS.File(file);
      Images.insert(newFile, function (error, result) {
        if (error) {

        }
        else {
          Session.set('imageId',result._id);


        }
      });
    });
  }
});


Template.lab.events({
  'click .deleteItem': function(){
    Lab.remove(this._id);
  }
});


Template.lab.events({
  'submit .add-image-info ':function (event) {
     event.preventDefault();
      var imageId= Session.get('imageId');
      var Patienttest= Session.get('Patienttest');

      Lab.insert({
patientId:Patienttest,
        imageId:imageId,
        imageUrl:'http://192.168.1.6:3000/cfs/files/Images/'+imageId,
        createdAt:new Date()
      });

       return false;
}
  });

  Template.lab.helpers({
    mdata: function() {
      var Patienttest= Session.get('Patienttest');
      return Lab.find({patientId:Patienttest},{sort:{createdAt: -1}});
    }

  });


  Template.lab.helpers({
    images: function() {
      return Images.findOne();
    }
  });
