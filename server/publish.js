Meteor.publish('allUsers', function(){
	if(Roles.userIsInRole(this.userId, 'admin')) {
		return Meteor.users.find({});
	}
});



// Admin Setting page
			 Meteor.publish('Antenatal', function(){
				if(Roles.userIsInRole(this.userId, 'normal-user')) {
					return Antenatal.find({});
				}
			 });

			 Meteor.publish('Loan', function(){
			 if(Roles.userIsInRole(this.userId, 'normal-user')) {
				 return Loan.find({});
			 }
			});


			Meteor.publish('Deduction', function(){
			if(Roles.userIsInRole(this.userId, 'normal-user')) {
				return Deduction.find({});
			}
		 });

			 Meteor.publish('AttendTime', function(){
				if(Roles.userIsInRole(this.userId, 'normal-user')) {
					return AttendTime.find({});
				}
			 });

			 Meteor.publish('LimitationAmount', function(){
			 if(Roles.userIsInRole(this.userId, 'normal-user')) {
				 return LimitationAmount.find({});
			 }
			});
// End Admin Setting Page
Meteor.publish('PatientInfo', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
	 return PatientInfo.find({});
 }
});

Meteor.publish('Attendance', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
	 return Attendance.find({});
 }
});






Meteor.publish('images', function(){
	 if(Roles.userIsInRole(this.userId, 'normal-user')) {
   return Images.find();
}
  });





      Meteor.publish('ProcedureBills', function(){
				 if(Roles.userIsInRole(this.userId, 'normal-user')) {
         return ProcedureBills.find();
}
        });

      Meteor.publish('Medication', function(){
				 if(Roles.userIsInRole(this.userId, 'normal-user')) {
         return Medication.find();
}
        });

      Meteor.publish('AddClinicBill', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
         return AddClinicBill.find();
}
        });

        Meteor.publish('ClinicalBillsDatails', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
           return ClinicalBillsDatails.find();
}
          });



      Meteor.publish('Lab', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
         return Lab.find();
}
        });

        Meteor.publish('Report', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
           return Report.find();
}
          });

        Meteor.publish('Photos', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
           return Photos.find();
}
          });


Meteor.publish('PersonalHistory', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
   return PersonalHistory.find();
}
  });

  Meteor.publish('Examination', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
     return Examination.find();
}
    });


      Meteor.publish('Reservation', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
         return Reservation.find();
}
        });

        Meteor.publish('Mangment', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
           return Mangment.find();
}
          });


Meteor.publish('AddPatientBill', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
   return AddPatientBill.find();
}
  });

  Meteor.publish('PatientBillsDatails', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
     return PatientBillsDatails.find();
}
    });






              Meteor.publish( 'Stock', function( search ) {

                check( search, Match.OneOf( String, null, undefined ) );

                let query      = {},
                    projection = { limit: 10, sort: { item: 1 } };

                if ( search ) {
                  let regex = new RegExp( search, 'i' );

                  query = {
                    $or: [
                      { item: regex },
                      { amount: regex },
                      { sex: regex }
                    ]
                  };

                  projection.limit = 100;
                }

                return Stock.find( query, projection );
              });


              Meteor.publish( 'PatientBills', function( search ) {

                check( search, Match.OneOf( String, null, undefined ) );

                let query      = {},
                    projection = { limit: 10, sort: { item: 1 } };

                if ( search ) {
                  let regex = new RegExp( search, 'i' );

                  query = {
                    $or: [
                      { item: regex },
                      { total: regex },
                      { patientId: regex }
                    ]
                  };

                  projection.limit = 100;
                }
return PatientBills.find();
                return PatientBills.find( query, projection );
              });


// setting
Meteor.publish('Doctors', function(){
 if(Roles.userIsInRole(this.userId, 'normal-user')) {
   return Doctors.find();
}
  });
