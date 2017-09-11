Meteor.subscribe('PersonalHistory');
Meteor.subscribe('Examination');
Meteor.subscribe('mangment');
Meteor.subscribe('PatientInfo');



  Template.examination.helpers({

    Examination: function() {
      var id= FlowRouter.getParam('id');
      return Examination.findOne({_id:id});


    } ,
     Pain: function (type) {
          return (this && this.Pain === type) ? 'checked' : null;
        },
    GeneralApperance: function (type) {
          return (this && this.GeneralApperance === type) ? 'checked' : null;
       },
    Skin: function (type) {
          return (this && this.Skin.Skin === type) ? 'checked' : null;
       },
    Eyes: function (type) {
          return (this && this.Eyes.Eyes === type) ? 'checked' : null;
       },
    Nose: function (type) {
          return (this && this.Nose.Nose === type) ? 'checked' : null;
       },
    MouthPharynx: function (type) {
          return (this && this.MouthPharynx.MouthPharynx === type) ? 'checked' : null;
       },
    TongueTeeth: function (type) {
          return (this && this.TongueTeeth.TongueTeeth === type) ? 'checked' : null;
       },
    Thyroid: function (type) {
          return (this && this.Thyroid.Thyroid === type) ? 'checked' : null;
       },
    Ln: function (type) {
          return (this && this.Ln.Ln === type) ? 'checked' : null;
       },
    Inspection: function (type) {
          return (this && this.Inspection.Inspection === type) ? 'checked' : null;
       },
    Palpation: function (type) {
          return (this && this.Palpation.Palpation === type) ? 'checked' : null;
       },
    Percussion: function (type) {
          return (this && this.Percussion.Percussion === type) ? 'checked' : null;
       } ,
    Auscultation: function (type) {
          return (this && this.Auscultation.Auscultation === type) ? 'checked' : null;
       } ,
    HeartInspection: function (type) {
          return (this && this.HeartInspection.HeartInspection === type) ? 'checked' : null;
       } ,
    HeartPalpation: function (type) {
          return (this && this.HeartPalpation.HeartPalpation === type) ? 'checked' : null;
       } ,
    HeartPercussion: function (type) {
          return (this && this.HeartPercussion.HeartPercussion === type) ? 'checked' : null;
       },
    HeartAuscultation: function (type) {
          return (this && this.HeartAuscultation.HeartAuscultation === type) ? 'checked' : null;
       },
    AbdomenInspection: function (type) {
          return (this && this.AbdomenInspection.AbdomenInspection === type) ? 'checked' : null;
       },
    AbdomenPalpation: function (type) {
          return (this && this.AbdomenPalpation.AbdomenPalpation === type) ? 'checked' : null;
       },
    AbdomenPercussion: function (type) {
          return (this && this.AbdomenPercussion.AbdomenPercussion === type) ? 'checked' : null;
       },
    AbdomenAuscultation: function (type) {
          return (this && this.AbdomenAuscultation.AbdomenAuscultation === type) ? 'checked' : null;
       },
    GranialNerves: function (type) {
          return (this && this.GranialNerves.GranialNerves === type) ? 'checked' : null;
       },
    MotorSystem: function (type) {
          return (this && this.MotorSystem.MotorSystem === type) ? 'checked' : null;
       },
    SensorySystem: function (type) {
          return (this && this.SensorySystem.SensorySystem === type) ? 'checked' : null;
       },
    Reflexes: function (type) {
          return (this && this.Reflexes.Reflexes === type) ? 'checked' : null;
       },
    Gait: function (type) {
          return (this && this.Gait.Gait === type) ? 'checked' : null;
       },
    MusclesBones: function (type) {
          return (this && this.MusclesBones.MusclesBones === type) ? 'checked' : null;
       },
    Joints: function (type) {
          return (this && this.Joints.Joints === type) ? 'checked' : null;
       },
    Extremities: function (type) {
          return (this && this.Extremities.Extremities === type) ? 'checked' : null;
       },
    NutritionalStatus: function (type) {
          return (this && this.NutritionalStatus.NutritionalStatus === type) ? 'checked' : null;
       },
    PsychologicalStatus: function (type) {
          return (this && this.PsychologicalStatus.PsychologicalStatus === type) ? 'checked' : null;
       }
  });
Template.examination.events({
  'submit .patient-examination ':function (event) {
     event.preventDefault();
        var patientId= Session.get('Patienttest');
        var date = new Date();
        var Height = document.getElementById("Height").value;
        var Weight = document.getElementById("Weight").value;
      Examination.insert({
        patientId:patientId,
        Height:Height,
        Weight:Weight,

        createdAt:moment(date).format("MM/DD/YYYY")
      });

       return false;
}
  });
