
Meteor.subscribe('PatientInfo');


Template.viewpatientBill.helpers({
  patientInfo: function() {
    var id= FlowRouter.getParam('patientId');
      return PatientInfo.findOne({_id:id});
  }
});
Template.viewpatientBill.helpers({
  BillInfo: function() {
    var Billid= FlowRouter.getParam('billid');
      return PatientBillsDatails.find({Billid:Billid});
  }
});

Template.viewpatientBill.helpers({
  BillProcedure: function() {
    var Billid= FlowRouter.getParam('billid');
      return ProcedureBills.find({Billid:Billid});
  }
});

Template.viewpatientBill.helpers({
  BillTotal: function() {
    var Billid= FlowRouter.getParam('billid');
    return AddPatientBill.findOne({_id:Billid});
  }
});
