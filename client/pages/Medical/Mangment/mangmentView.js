Meteor.subscribe('Mangment');






Template.mangmentView.helpers({
  mdata: function() {
var mangmentId= FlowRouter.getParam('id');

return Mangment.findOne({ _id: mangmentId });



  }


});
Template.mangmentView.helpers({
  medicationtview: function() {
var mangmentId= FlowRouter.getParam('id');

    return Medication.find({mangmentId:mangmentId});
  }
});
