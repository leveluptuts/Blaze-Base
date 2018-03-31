
Template.attendace.events({
  'submit .update-Attendace-info ':function (event) {
     event.preventDefault();

      var name= event.target.name.value;
      var attendtime= event.target.attendtime.value;
      var titel= event.target.titel.value;
    var today = new Date();

      Staffe.insert({
        name: name,
        titel:titel,
        attendtime: attendtime,
        date:moment(today).format("MM/DD/YYYY"),

      });

       return false;

}

  });

  Template.attendace.events({
    'submit .update-Attendace-delay ':function (event) {
       event.preventDefault();

        var name= event.target.name1.value;
        var attendtime= event.target.attendtime1.value;
        var titel= event.target.titel1.value;
      var today = new Date();

        StaffeDelay.insert({
          name: name,
          titel:titel,
          attendtime: attendtime,
          date:moment(today).format("MM/DD/YYYY"),

        });

         return false;

  }

    });
