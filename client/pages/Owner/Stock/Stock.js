Meteor.subscribe('Stock');




Template.Stock.helpers({
  mdata: function() {
    return Stock.find({},{sort:{createdAt: -1}});
  },
  editing:function(){
    return Session.equals('editItemId',this._id);

  }
});

Template.Stock.events({
  'click .deleteItem': function(){
    Stock.remove(this._id);
  },
  'click .editItem': function(){
    Session.set('editItemId',this._id);


},
'click .cancelItem': function(){
  Session.set('editItemId',null);


},
  'click .saveItem': function(){
    saveItem();
  },
  'keypress input': function(e){
    if(e.keyCode === 13){
      saveItem();
    }
    else if(e.keyCode === 27){
      Session.set('editItemId', null);
    }
  }
});



Template.Stock.events({
  'submit .update-patient-info ':function (event) {
     event.preventDefault();

      var Item= event.target.Item.value;
      var Unit= event.target.Unit.value;
      var Amount= parseInt(event.target.Amount.value);
      var Deilar_Unit_Price= parseInt(event.target.Deilar_Unit_Price.value);
      var Custmer_Unit_Price= parseInt(event.target.Custmer_Unit_Price.value);
      var Deilar_Total_Price= Amount * Deilar_Unit_Price;
      var Custmer_Total_Price= Amount * Custmer_Unit_Price;
      var expirydate= event.target.expirydate.value;
      var date = new Date();

      Stock.insert({
        Item: Item,
        Unit: Unit,
        Amount: Amount,
        Deilar_Unit_Price: Deilar_Unit_Price,
        Custmer_Unit_Price: Custmer_Unit_Price,
        Deilar_Total_Price: Deilar_Total_Price,
        Custmer_Total_Price: Custmer_Total_Price,
        expirydate: expirydate,
        createdAt:moment(date).format("DD.MM.YYYY.hh.mm"),
        userId:Meteor.userId()
      });

}
  });


  var saveItem = function(){
    var editItem = {
      Item: $("#editeitemItem").val(),
      Unit: $("#editeitemUnit").val(),
      Amount: $("#editeitemAmount").val(),
      Deilar_Unit_Price: $("#editeitemDeilar_Unit_Price").val(),
      Custmer_Unit_Price: $("#editeitemCustmer_Unit_Price").val(),
       Deilar_Total_Price: $("#editeitemAmount").val() * $("#editeitemDeilar_Unit_Price").val(),
      Custmer_Total_Price: $("#editeitemAmount").val() * $("#editeitemCustmer_Unit_Price").val(),
      expirydate: $("#editeitemexpirydate").val(),

    }

    Stock.update(Session.get('editItemId'), {$set: editItem});
     Session.set('editItemId', null);
   }
