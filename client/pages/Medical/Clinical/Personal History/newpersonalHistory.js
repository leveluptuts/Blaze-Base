Meteor.subscribe('PersonalHistory');
Meteor.subscribe('Examination');
Meteor.subscribe('mangment');
Meteor.subscribe('PatientInfo');



  Template.newpersonalHistory.helpers({

    History: function() {
      var id= FlowRouter.getParam('id');
      //Personal History ID
   return PersonalHistory.findOne({_id:id});
 },


    mdata10: function() {
      var id2= Session.get('Patienttest');
    }

  });

Template.newpersonalHistory.events({
  'submit .update-patient-info ':function (event, template) {
     event.preventDefault();
 var patientId= Session.get('Patienttest');
       var date = new Date();

      // Personal History
       var dateofbirth = document.getElementById("dateofbirth").value;
       var occupation = document.getElementById("occupation").value;
       var sex = template.find('input:radio[name=Sex]:checked');
      var MaritalHistory = template.find('input:radio[name=MaritalHistory]:checked');
      var SpecialHabits =  template.find('input:radio[name=SpecialHabits]:checked');
      // Allergy
      var Allergy = template.find('input:radio[name=Allergy]:checked');
      var AllergyComment= document.getElementById("AllergyComment").value;
      var humanReadable = {};
      humanReadable.Allergy= $(Allergy).val();
      humanReadable.commet=AllergyComment;
      //Drugs Reaction
      var DrugsReaction = template.find('input:radio[name=DrugsReaction]:checked');
      var DrugsReactionCommet= document.getElementById("DrugsReactionCommet").value;
      var DrugsReactionReadable = {};
      DrugsReactionReadable.DrugsReaction= $(DrugsReaction).val();
      DrugsReactionReadable.commet=DrugsReactionCommet;

      var OtherDiseases = document.getElementById("OtherDiseases").value;
      var Complain = document.getElementById("Complain").value;
      var PresentHistory = document.getElementById("PresentHistory").value;
      var PastHistory = document.getElementById("PastHistory").value;
      var familyHistory = document.getElementById("FamilyHistory").value;
      var PsychosocialHistory = document.getElementById("PsychosocialHistory").value;

//History by Ststems
      //General
      var General  = template.find('input:radio[name=General]:checked');
      var GeneralCommet= document.getElementById("GeneralComment").value;
      var GeneralReadable = {};
      GeneralReadable.General= $(General).val();
      GeneralReadable.commet=GeneralCommet;
      //Pain
      var Pain  = template.find('input:radio[name=Pain]:checked');
      var PainCommet= document.getElementById("PainComment").value;
      var PainReadable = {};
      PainReadable.Pain= $(Pain).val();
      PainReadable.commet=PainCommet;
      //Respiratory System
      var RespiratorySystem  = template.find('input:radio[name=RespiratorySystem]:checked');
      var RespiratorySystemComment= document.getElementById("RespiratorySystemComment").value;
      var RespiratorySystemReadable = {};
      RespiratorySystemReadable.RespiratorySystem= $(RespiratorySystem).val();
      RespiratorySystemReadable.commet=RespiratorySystemComment;
      //Gardiovascular Systme
      var GardiovascularSystem  = template.find('input:radio[name=GardiovascularSystem]:checked');
      var GardiovascularSystemComment= document.getElementById("GardiovascularSystemComment").value;
      var GardiovascularSystemReadable = {};
      GardiovascularSystemReadable.GardiovascularSystem= $(GardiovascularSystem).val();
      GardiovascularSystemReadable.commet=GardiovascularSystemComment;
      // Gastrointestinal System
      var GastrointestinalSystem  = template.find('input:radio[name=GastrointestinalSystem]:checked');
      var GastrointestinalSystemComment= document.getElementById("GastrointestinalSystemComment").value;
      var GastrointestinalSystemReadable = {};
      GastrointestinalSystemReadable.GastrointestinalSystem= $(GastrointestinalSystem).val();
      GastrointestinalSystemReadable.commet=GastrointestinalSystemComment;
      // Genitourinary System
      var GenitourinarySystem  = template.find('input:radio[name=GenitourinarySystem]:checked');
      var GenitourinarySystemComment= document.getElementById("GenitourinarySystemComment").value;
      var GenitourinarySystemReadable = {};
      GenitourinarySystemReadable.GenitourinarySystem= $(GenitourinarySystem).val();
      GenitourinarySystemReadable.commet=GenitourinarySystemComment;
      //Endocrine System
      var EndocrineSystem  = template.find('input:radio[name=EndocrineSystem]:checked');
      var EndocrineSystemComment= document.getElementById("EndocrineSystemComment").value;
      var EndocrineSystemReadable = {};
      EndocrineSystemReadable.EndocrineSystem= $(EndocrineSystem).val();
      EndocrineSystemReadable.commet=EndocrineSystemComment;
      // Neurological System
      var NeurologicalSystem  = template.find('input:radio[name=NeurologicalSystem]:checked');
      var NeurologicalSystemComment= document.getElementById("NeurologicalSystemComment").value;
      var NeurologicalSystemReadable = {};
      NeurologicalSystemReadable.NeurologicalSystem= $(NeurologicalSystem).val();
      NeurologicalSystemReadable.commet=NeurologicalSystemComment;

      PersonalHistory.insert({
        patientId:patientId,
        dateofbirth:dateofbirth,
        occupation:occupation,
        sex:$(sex).val(),
        MaritalHistory:$(MaritalHistory).val(),
        SpecialHabits:$(SpecialHabits).val(),
        Allergy:humanReadable,
        DrugsReaction: DrugsReactionReadable,
        OtherDiseases:OtherDiseases,
        Complain:Complain,
        PresentHistory:PresentHistory,
        PastHistory:PastHistory,
        familyHistory:familyHistory,
        PsychosocialHistory:PsychosocialHistory,
        General:GeneralReadable,
        Pain:PainReadable,
        RespiratorySystem:RespiratorySystemReadable,
        GardiovascularSystem:GardiovascularSystemReadable,
        GastrointestinalSystem:GastrointestinalSystemReadable,
        GenitourinarySystem:GenitourinarySystemReadable,
        EndocrineSystem:EndocrineSystemReadable,
        NeurologicalSystem:NeurologicalSystemReadable,
        createdAt:moment(date).format("MM/DD/YYYY")
      });

       return false;
}
  });
