Meteor.subscribe('GalleryHistory');



Template.GalleryHistory.helpers({
  history: function() {
    return GalleryHistory.find({},{sort:{createdAt: -1}});

  }


});
