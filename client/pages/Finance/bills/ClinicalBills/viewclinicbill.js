
Meteor.subscribe('PatientInfo');


Template.viewclinicalbill.helpers({
  BillInfo: function() {
    var Billid= FlowRouter.getParam('id');
      return ClinicalBillsDatails.find({ClinicBillId:Billid});
  }
});

Template.viewclinicalbill.helpers({
  BillTotal: function() {
    var Billid= FlowRouter.getParam('id');
    return AddClinicBill.findOne({_id:Billid});
  }
});
