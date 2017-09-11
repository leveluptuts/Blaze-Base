

      Meteor.subscribe('PersonalHistory');
      Meteor.subscribe('Antenatal');
      Meteor.subscribe('mangment');
      Meteor.subscribe('PatientInfo');



        Template.newAntenatal.helpers({
          Antenatal: function() {
            var id= FlowRouter.getParam('id');
            var patientId=Session.get('Patienttest');
            return Antenatal.findOne({_id:id});
          }
        });

      Template.newAntenatal.events({
        'submit .patient-Antenatal ':function (event,template) {
           event.preventDefault();
             var patientId= Session.get('Patienttest');
             var date = new Date();

             var FolicAcid = template.find('input:checkbox[name=FolicAcid]:checked');
             var CalciumandVitaminD = template.find('input:checkbox[name=CalciumandVitaminD]:checked');
             var Iron = template.find('input:checkbox[name=Iron]:checked');
             var Zinc = template.find('input:checkbox[name=Zinc]:checked');
             var VitaminA = template.find('input:checkbox[name=VitaminA]:checked');
             var Poverty = template.find('input:checkbox[name=Poverty]:checked');
             var Bodyweight = template.find('input:checkbox[name=Bodyweight]:checked');
             var Caffeine = template.find('input:checkbox[name=Caffeine]:checked');
             var VegetarianConsideration = template.find('input:checkbox[name=VegetarianConsideration]:checked');
             var HerbalProducts = template.find('input:checkbox[name=HerbalProducts]:checked');

             var TobaccoUse = template.find('input:checkbox[name=TobaccoUse]:checked');
             var DrugDependency = template.find('input:checkbox[name=DrugDependency]:checked');
             var AlcoholUse = template.find('input:checkbox[name=AlcoholUse]:checked');

             var Accutane = template.find('input:checkbox[name=Accutane]:checked');
             var ACEInhibiors = template.find('input:checkbox[name=ACEInhibiors]:checked');
             var Aminopterinmethotrexate = template.find('input:checkbox[name=Aminopterinmethotrexate]:checked');
             var Carbamazepine = template.find('input:checkbox[name=Carbamazepine]:checked');
             var CoumadinWarfarin = template.find('input:checkbox[name=CoumadinWarfarin]:checked');
             var Daunorubicin = template.find('input:checkbox[name=Daunorubicin]:checked');
             var Lithium = template.find('input:checkbox[name=Lithium]:checked');
             var Metformin = template.find('input:checkbox[name=Metformin]:checked');
             var Phenytoin = template.find('input:checkbox[name=Phenytoin]:checked');
             var Propylthiouracilmethimazole = template.find('input:checkbox[name=Propylthiouracilmethimazole]:checked');
             var Quinolones = template.find('input:checkbox[name=Quinolones]:checked');
             var RetinoicAcid = template.find('input:checkbox[name=RetinoicAcid]:checked');
             var Tetracycline = template.find('input:checkbox[name=Tetracycline]:checked');
             var Trimethadione = template.find('input:checkbox[name=Trimethadione]:checked');
             var ValporicAcid = template.find('input:checkbox[name=ValporicAcid]:checked');

             var ValporicAcid = template.find('input:checkbox[name=ValporicAcid]:checked');
             var ValporicAcid = template.find('input:checkbox[name=ValporicAcid]:checked');
             var ValporicAcid = template.find('input:checkbox[name=ValporicAcid]:checked');
             var ValporicAcid = template.find('input:checkbox[name=ValporicAcid]:checked');
             var ValporicAcid = template.find('input:checkbox[name=ValporicAcid]:checked');

             var CMV = template.find('input:checkbox[name=CMV]:checked');
             var HumanparvovirusB19 = template.find('input:checkbox[name=HumanparvovirusB19]:checked');
             var Rubella = template.find('input:checkbox[name=Rubella]:checked');
             var Toxoplasmosis = template.find('input:checkbox[name=Toxoplasmosis]:checked');
             var VaricellaHSV1 = template.find('input:checkbox[name=VaricellaHSV1]:checked');

             var Chlamydia = template.find('input:checkbox[name=Chlamydia]:checked');
             var GenitalHumanPapillomavirus = template.find('input:checkbox[name=GenitalHumanPapillomavirus]:checked');
             var Gonorrhea = template.find('input:checkbox[name=Gonorrhea]:checked');
             var HepatitisB = template.find('input:checkbox[name=HepatitisB]:checked');
             var HerpesHSV2 = template.find('input:checkbox[name=HerpesHSV2]:checked');
             var HIVAIDS = template.find('input:checkbox[name=HIVAIDS]:checked');
             var Syphilis = template.find('input:checkbox[name=Syphilis]:checked');

             var Cancer = template.find('input:checkbox[name=Cancer]:checked');
             var Cardiovascular = template.find('input:checkbox[name=Cardiovascular]:checked');
             var Diabetes = template.find('input:checkbox[name=Diabetes]:checked');
             var Epilepsy = template.find('input:checkbox[name=Epilepsy]:checked');
             var Lupus = template.find('input:checkbox[name=Lupus]:checked');
             var MaternalPKU = template.find('input:checkbox[name=MaternalPKU]:checked');
             var PsychiarricIllness = template.find('input:checkbox[name=PsychiarricIllness]:checked');
             var ThyroidProblems = template.find('input:checkbox[name=ThyroidProblems]:checked');

             var Abuse = template.find('input:checkbox[name=Abuse]:checked');
             var Genetics = template.find('input:checkbox[name=Genetics]:checked');
             var HomeandLeisureActivities = template.find('input:checkbox[name=HomeandLeisureActivities]:checked');
             var HotTubsandSaunas = template.find('input:checkbox[name=HotTubsandSaunas]:checked');
             var Infertility = template.find('input:checkbox[name=Infertility]:checked');
             var PreviousOutcomes = template.find('input:checkbox[name=PreviousOutcomes]:checked');
             var SocialSupport = template.find('input:checkbox[name=SocialSupport]:checked');
             var WorkplaceConcerns = template.find('input:checkbox[name=WorkplaceConcerns]:checked');






















        Antenatal.insert({
              patientId:patientId,

              CalciumandVitaminD:$(CalciumandVitaminD).val(),
              FolicAcid:$(FolicAcid).val(),
              Iron:$(Iron).val(),
              Zinc:$(Zinc).val(),
              VitaminA:$(VitaminA).val(),
              Poverty:$(Poverty).val(),
              Bodyweight:$(Bodyweight).val(),
              Caffeine:$(Caffeine).val(),
              VegetarianConsideration:$(VegetarianConsideration).val(),
              HerbalProducts:$(HerbalProducts).val(),
              TobaccoUse:$(TobaccoUse).val(),
              DrugDependency:$(DrugDependency).val(),
              AlcoholUse:$(AlcoholUse).val(),

              Accutane:$(Accutane).val(),
              ACEInhibiors:$(ACEInhibiors).val(),
              Aminopterinmethotrexate:$(Aminopterinmethotrexate).val(),
              Carbamazepine:$(Carbamazepine).val(),
              CoumadinWarfarin:$(CoumadinWarfarin).val(),
              Daunorubicin:$(Daunorubicin).val(),
              Lithium:$(Lithium).val(),
              Metformin:$(Metformin).val(),
              Phenytoin:$(Phenytoin).val(),
              Propylthiouracilmethimazole:$(Propylthiouracilmethimazole).val(),
              Quinolones:$(Quinolones).val(),
              RetinoicAcid:$(RetinoicAcid).val(),
              Tetracycline:$(Tetracycline).val(),
              Trimethadione:$(Trimethadione).val(),
              ValporicAcid:$(ValporicAcid).val(),

              CMV:$(CMV).val(),
              HumanparvovirusB19:$(HumanparvovirusB19).val(),
              Rubella:$(Rubella).val(),
              Toxoplasmosis:$(Toxoplasmosis).val(),
              VaricellaHSV1:$(VaricellaHSV1).val(),

              Chlamydia:$(Chlamydia).val(),
              GenitalHumanPapillomavirus:$(GenitalHumanPapillomavirus).val(),
              Gonorrhea:$(Gonorrhea).val(),
              HepatitisB:$(HepatitisB).val(),
              HerpesHSV2:$(HerpesHSV2).val(),
              HIVAIDS:$(HIVAIDS).val(),
              Syphilis:$(Syphilis).val(),

              Cancer:$(Cancer).val(),
              Cardiovascular:$(Cardiovascular).val(),
              Diabetes:$(Diabetes).val(),
              Epilepsy:$(Epilepsy).val(),
              Lupus:$(Lupus).val(),
              MaternalPKU:$(MaternalPKU).val(),
              PsychiarricIllness:$(PsychiarricIllness).val(),
              ThyroidProblems:$(ThyroidProblems).val(),

              Abuse:$(Abuse).val(),
              Genetics:$(Genetics).val(),
              HomeandLeisureActivities:$(HomeandLeisureActivities).val(),
              HotTubsandSaunas:$(HotTubsandSaunas).val(),
              Infertility:$(Infertility).val(),
              PreviousOutcomes:$(PreviousOutcomes).val(),
              SocialSupport:$(SocialSupport).val(),
              WorkplaceConcerns:$(WorkplaceConcerns).val(),

              createdAt:moment(date).format("MM/DD/YYYY")
            });
             return false;
      }
        });
