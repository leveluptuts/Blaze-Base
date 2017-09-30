

Template.Home.onCreated(function(){
	this.autorun(() => {
		this.subscribe('Reservation');
		this.subscribe('Attendance');
    Session.set('userID',Meteor.userId());

	});
});

Template.Home.helpers({
  reservPatients: function() {
    var drId=Session.get('userID');
	  console.log(drId);

		return Doctors.findOne({ dr_Id : drId });

},


// Get Last Attend Time Set by Admin
AttendaceStaffSetTime: function() {
	return AttendTime.findOne();
},
// Get Last Attend Time For this Doctor
testo: function() {
	var drId=Session.get('userID');
	var dateo = new Date();
	var date=moment(dateo).format("MM/DD/YYYY");
	return Attendance.findOne({ userId: drId , date:date });


},



  });

Template.Home.events({
    'click #button':function (event) {
     event.preventDefault();

       var userId= Session.get('userID');
       var date = new Date();
			 var Status = '1';
       var Drname = document.getElementById("Drname").value;
			 var AttendtTime = document.getElementById("todayattendTime").value;

			 var AttendTime = new Date(AttendtTime).getTime();
			 var ActualAttendTime = new Date().getTime();
			 var hourDiff = ActualAttendTime - AttendTime; //in ms
			 var secDiff = hourDiff / 1000; //in s
			 var minDiff = hourDiff / 60 / 1000; //in minutes
			 var hDiff = hourDiff / 3600 / 1000; //in hours
			 var humanReadable = {};
			 humanReadable.hours = Math.floor(hDiff);
			 humanReadable.minutes = parseFloat(minDiff - 60 * humanReadable.hours).toFixed(0);
			 console.log(humanReadable);
			 var exist = document.getElementById("test").value;
			 if(exist>0){

				 FlowRouter.go('/DrNotification')

			 }else{




      Attendance.insert({
        userId:userId,
				Drname:Drname,
				Status:Status,
        date:moment(date).format("MM/DD/YYYY"),
        ActualAttendTime:moment(date).format("hh:mm"),
				humanReadable:humanReadable,
				AttendTime:moment(AttendTime).format("hh:mm"),

      });


FlowRouter.go('/DrNotification')
       return false;
}
console.log('Lets check in')
 }
  });
