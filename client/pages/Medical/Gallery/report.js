Meteor.subscribe('Report');
Meteor.subscribe('Images');
Meteor.subscribe('PatientInfo');


  Template.report.events({
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


  Template.report.events({
    'submit .add-image-info ':function (event) {
       event.preventDefault();
        var imageId= Session.get('imageId');
        var Patienttest= Session.get('Patienttest');

        Report.insert({
  patientId:Patienttest,
          imageId:imageId,
          imageUrl:'http://192.168.1.6:3000/cfs/files/Images/'+imageId,
          createdAt:new Date()
        });

         return false;
  }
    });

    Template.report.helpers({
      mdata: function() {
        var Patienttest= Session.get('Patienttest');
        return Report.find({patientId:Patienttest},{sort:{createdAt: -1}});
      }

    });

      Template.report.helpers({
        images: function() {
          return Images.findOne();
        }
      });
