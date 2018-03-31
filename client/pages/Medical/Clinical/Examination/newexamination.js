Meteor.subscribe('PersonalHistory');
Meteor.subscribe('Examination');
Meteor.subscribe('mangment');
Meteor.subscribe('PatientInfo');



  Template.newexamination.helpers({

    Examination: function() {
      var id= FlowRouter.getParam('id');
      return Examination.findOne({_id:id});


    }

  });
Template.newexamination.events({
  'submit .patient-examination ':function (event,template) {
     event.preventDefault();
 var patientId= Session.get('Patienttest');
       var date = new Date();
// Patient Data

var Height = document.getElementById("Height").value;
var Weight = document.getElementById("Weight").value;
var Temp = document.getElementById("Temp").value;
var Bp = document.getElementById("Bp").value;
var Pulse = document.getElementById("Pulse").value;
var Rr = document.getElementById("Rr").value;
// Pain
var Pain = template.find('input:radio[name=Pain]:checked');
var PainSpecify= document.getElementById("PainSpecify").value;


//Clinical Finding by Systems

// GeneralApperance
var GeneralApperance = template.find('input:radio[name=GeneralApperance]:checked');
var GeneralApperanceComment= document.getElementById("GeneralApperanceComment").value;

// Skin
var Skin = template.find('input:radio[name=Skin]:checked');
var SkinComment= document.getElementById("SkinComment").value;
var SkinReadable = {};
SkinReadable.Skin= $(Skin).val();
SkinReadable.Comment=SkinComment;
// Eyes
var Eyes = template.find('input:radio[name=Eyes]:checked');
var EyesComment= document.getElementById("EyesComment").value;
var EyesReadable = {};
EyesReadable.Eyes= $(Eyes).val();
EyesReadable.Comment=EyesComment;
// Nose
var Nose = template.find('input:radio[name=Nose]:checked');
var NoseComment= document.getElementById("NoseComment").value;
var NoseReadable = {};
NoseReadable.Nose= $(Nose).val();
NoseReadable.Comment=NoseComment;
// MouthPharynx
var MouthPharynx = template.find('input:radio[name=MouthPharynx]:checked');
var MouthPharynxComment= document.getElementById("MouthPharynxComment").value;
var MouthPharynxReadable = {};
MouthPharynxReadable.MouthPharynx= $(MouthPharynx).val();
MouthPharynxReadable.Comment=MouthPharynxComment;
//TongueTeeth
var TongueTeeth = template.find('input:radio[name=TongueTeeth]:checked');
var TongueTeethComment= document.getElementById("TongueTeethComment").value;
var TongueTeethReadable = {};
TongueTeethReadable.TongueTeeth= $(TongueTeeth).val();
TongueTeethReadable.Comment=TongueTeethComment;
//Thyroid
var Thyroid = template.find('input:radio[name=Thyroid]:checked');
var ThyroidComment= document.getElementById("ThyroidComment").value;
var ThyroidReadable = {};
ThyroidReadable.Thyroid= $(Thyroid).val();
ThyroidReadable.Comment=ThyroidComment;
//Ln
var Ln = template.find('input:radio[name=Ln]:checked');
var LnComment= document.getElementById("LnComment").value;
var LnReadable = {};
LnReadable.Ln= $(Ln).val();
LnReadable.Comment=LnComment;
//Inspection
var Inspection = template.find('input:radio[name=Inspection]:checked');
var InspectionComment= document.getElementById("InspectionComment").value;
var InspectionReadable = {};
InspectionReadable.Inspection= $(Inspection).val();
InspectionReadable.Comment=InspectionComment;
//Palpation
var Palpation = template.find('input:radio[name=Palpation]:checked');
var PalpationComment= document.getElementById("PalpationComment").value;
var PalpationReadable = {};
PalpationReadable.Palpation= $(Palpation).val();
PalpationReadable.Comment=PalpationComment;
//Percussion
var Percussion = template.find('input:radio[name=Percussion]:checked');
var PercussionComment= document.getElementById("PercussionComment").value;
var PercussionReadable = {};
PercussionReadable.Percussion= $(Percussion).val();
PercussionReadable.Comment=PercussionComment;

//Heart
//Auscultation
var Auscultation = template.find('input:radio[name=Auscultation]:checked');
var AuscultationComment= document.getElementById("AuscultationComment").value;
var AuscultationReadable = {};
AuscultationReadable.Auscultation= $(Auscultation).val();
AuscultationReadable.Comment=AuscultationComment;
//HeartInspection
var HeartInspection = template.find('input:radio[name=HeartInspection]:checked');
var HeartInspectionComment= document.getElementById("HeartInspectionComment").value;
var HeartInspectionReadable = {};
HeartInspectionReadable.HeartInspection= $(HeartInspection).val();
HeartInspectionReadable.Comment=HeartInspectionComment;
//HeartPalpation
var HeartPalpation = template.find('input:radio[name=HeartPalpation]:checked');
var HeartPalpationComment= document.getElementById("HeartPalpationComment").value;
var HeartPalpationReadable = {};
HeartPalpationReadable.HeartPalpation= $(HeartPalpation).val();
HeartPalpationReadable.Comment=HeartPalpationComment;
//HeartPercussion
var HeartPercussion = template.find('input:radio[name=HeartPercussion]:checked');
var HeartPercussionComment= document.getElementById("HeartPercussionComment").value;
var HeartPercussionReadable = {};
HeartPercussionReadable.HeartPercussion= $(HeartPercussion).val();
HeartPercussionReadable.Comment=HeartPercussionComment;
//HeartAuscultation
var HeartAuscultation = template.find('input:radio[name=HeartAuscultation]:checked');
var HeartAuscultationComment= document.getElementById("HeartAuscultationComment").value;
var HeartAuscultationReadable = {};
HeartAuscultationReadable.HeartAuscultation= $(HeartAuscultation).val();
HeartAuscultationReadable.Comment=HeartAuscultationComment;

//Abdomen
//AbdomenInspection
var AbdomenInspection = template.find('input:radio[name=AbdomenInspection]:checked');
var AbdomenInspectionComment= document.getElementById("AbdomenInspectionComment").value;
var AbdomenInspectionReadable = {};
AbdomenInspectionReadable.AbdomenInspection= $(AbdomenInspection).val();
AbdomenInspectionReadable.Comment=AbdomenInspectionComment;
//AbdomenPalpation
var AbdomenPalpation = template.find('input:radio[name=AbdomenPalpation]:checked');
var AbdomenPalpationComment= document.getElementById("AbdomenPalpationComment").value;
var AbdomenPalpationReadable = {};
AbdomenPalpationReadable.AbdomenPalpation= $(AbdomenPalpation).val();
AbdomenPalpationReadable.Comment=AbdomenPalpationComment;
//AbdomenPercussion
var AbdomenPercussion = template.find('input:radio[name=AbdomenPercussion]:checked');
var AbdomenPercussionComment= document.getElementById("AbdomenPercussionComment").value;
var AbdomenPercussionReadable = {};
AbdomenPercussionReadable.AbdomenPercussion= $(AbdomenPercussion).val();
AbdomenPercussionReadable.Comment=AbdomenPercussionComment;
//AbdomenAuscultation
var AbdomenAuscultation = template.find('input:radio[name=AbdomenAuscultation]:checked');
var AbdomenAuscultationComment= document.getElementById("AbdomenAuscultationComment").value;
var AbdomenAuscultationReadable = {};
AbdomenAuscultationReadable.AbdomenAuscultation= $(AbdomenAuscultation).val();
AbdomenAuscultationReadable.Comment=AbdomenAuscultationComment;

//Neurological Findings
//GranialNerves
var GranialNerves = template.find('input:radio[name=GranialNerves]:checked');
var GranialNervesComment= document.getElementById("GranialNervesComment").value;
var GranialNervesReadable = {};
GranialNervesReadable.GranialNerves= $(GranialNerves).val();
GranialNervesReadable.Comment=GranialNervesComment;
//MotorSystem
var MotorSystem = template.find('input:radio[name=MotorSystem]:checked');
var MotorSystemComment= document.getElementById("MotorSystemComment").value;
var MotorSystemReadable = {};
MotorSystemReadable.MotorSystem= $(MotorSystem).val();
MotorSystemReadable.Comment=MotorSystemComment;
//SensorySystem
var SensorySystem = template.find('input:radio[name=SensorySystem]:checked');
var SensorySystemComment= document.getElementById("SensorySystemComment").value;
var SensorySystemReadable = {};
SensorySystemReadable.SensorySystem= $(SensorySystem).val();
SensorySystemReadable.Comment=SensorySystemComment;
//Reflexes
var Reflexes = template.find('input:radio[name=Reflexes]:checked');
var ReflexesComment= document.getElementById("ReflexesComment").value;
var ReflexesReadable = {};
ReflexesReadable.Reflexes= $(Reflexes).val();
ReflexesReadable.Comment=ReflexesComment;
//Gait
var Gait = template.find('input:radio[name=Gait]:checked');
var GaitComment= document.getElementById("GaitComment").value;
var GaitReadable = {};
GaitReadable.Gait= $(Gait).val();
GaitReadable.Comment=GaitComment;
//MusclesBones
var MusclesBones = template.find('input:radio[name=MusclesBones]:checked');
var MusclesBonesComment= document.getElementById("MusclesBonesComment").value;
var MusclesBonesReadable = {};
MusclesBonesReadable.MusclesBones= $(MusclesBones).val();
MusclesBonesReadable.Comment=MusclesBonesComment;
//Joints
var Joints = template.find('input:radio[name=Joints]:checked');
var JointsComment= document.getElementById("JointsComment").value;
var JointsReadable = {};
JointsReadable.Joints= $(Joints).val();
JointsReadable.Comment=JointsComment;
//Extremities
var Extremities = template.find('input:radio[name=Extremities]:checked');
var ExtremitiesComment= document.getElementById("ExtremitiesComment").value;
var ExtremitiesReadable = {};
ExtremitiesReadable.Extremities= $(Extremities).val();
ExtremitiesReadable.Comment=ExtremitiesComment;
//NutritionalStatus
var NutritionalStatus = template.find('input:radio[name=NutritionalStatus]:checked');
var NutritionalStatusComment= document.getElementById("NutritionalStatusComment").value;
var NutritionalStatusReadable = {};
NutritionalStatusReadable.NutritionalStatus= $(NutritionalStatus).val();
NutritionalStatusReadable.Comment=NutritionalStatusComment;
//PsychologicalStatus
var PsychologicalStatus = template.find('input:radio[name=PsychologicalStatus]:checked');
var PsychologicalStatusComment= document.getElementById("PsychologicalStatusComment").value;
var PsychologicalStatusReadable = {};
PsychologicalStatusReadable.PsychologicalStatus= $(PsychologicalStatus).val();
PsychologicalStatusReadable.Comment=PsychologicalStatusComment;

//Others
var ECg= document.getElementById("ECG").value;
var GCs= document.getElementById("GCS").value;

//Provisional Diagnosis
var Diagnosis= document.getElementById("Diagnosis").value;
var RiskFactors= document.getElementById("RiskFactors").value;
var PlanofCare= document.getElementById("PlanofCare").value;

Examination.insert({
        patientId:patientId,
        Height:Height,
        Weight:Weight,
        Temp:Temp,
        Bp:Bp,
        Pulse:Pulse,
        Rr:Rr,
        Pain:$(Pain).val(),
        PainSpecify:PainSpecify,
        GeneralApperance:$(GeneralApperance).val(),
        GeneralApperanceComment:$(GeneralApperanceComment).val(),
        Skin:SkinReadable,
        Eyes:EyesReadable,
        Nose:NoseReadable,
        MouthPharynx:MouthPharynxReadable,
        TongueTeeth:TongueTeethReadable,
        Thyroid:ThyroidReadable,
        Ln:LnReadable,
        Inspection:InspectionReadable,
        Palpation:PalpationReadable,
        Percussion:PercussionReadable,
        Auscultation:AuscultationReadable,
        HeartInspection:HeartInspectionReadable,
        HeartPalpation:HeartPalpationReadable,
        HeartPercussion:HeartPercussionReadable,
        HeartAuscultation:HeartAuscultationReadable,
        AbdomenInspection:AbdomenInspectionReadable,
        AbdomenPalpation:AbdomenPalpationReadable,
        AbdomenPercussion:AbdomenPercussionReadable,
        AbdomenAuscultation:AbdomenAuscultationReadable,
        GranialNerves:GranialNervesReadable,
        MotorSystem:MotorSystemReadable,
        SensorySystem:SensorySystemReadable,
        Reflexes:ReflexesReadable,
        Gait:GaitReadable,
        MusclesBones:MusclesBonesReadable,
        Joints:JointsReadable,
        Extremities:ExtremitiesReadable,
        NutritionalStatus:NutritionalStatusReadable,
        PsychologicalStatus:PsychologicalStatusReadable,
        ECg:ECg,
        GCs:GCs,
        Diagnosis:Diagnosis,
        RiskFactors:RiskFactors,
        PlanofCare:PlanofCare,
          createdAt:moment(date).format("MM/DD/YYYY")
      });

       return false;
}
  });
