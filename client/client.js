Meteor.startup(function(){
  Meteor.subscribe('votes');

  Tracker.autorun(function (){
    var votes_data = Votes.find().fetch();
    //note supported //var votes = Votes.aggregate([ { $group : { _id : "$party", votes:{$sum: 1} } } ]).fetch();
    var votes = [];

    var groups = _.countBy(votes_data, "party");

    _.each(groups, function(v, k){
      votes.push({party:k, votes:v});
      //console.log(k,v);
    });

    Session.set("votes", votes);

    console.log("In Tracker.autorun", Session.get("votes"));
  });
});

Template.votes.helpers({
  vote: function (){
    return Session.get("votes");//return votes;
  }
});

Template.button.events({
  'click a' : function (e){
    e.preventDefault();
    var party = $(e.currentTarget).text();
    Votes.insert({party: party, createdAt: Date.now()});
  }
});

Template.buttons.helpers({
  parties: function(){
    return Session.get("votes");//return votes;
    //return ["Labor", "Liberal", "Green"];
  }
});

Template.button.helpers({
  getButtonClass: function (str){
    return 'btn ' + str.replace(/[^a-z0-9]/ig, '').toLowerCase();
  }
});
