Meteor.startup(function(){
  Meteor.publish('votes', function(){
    return Votes.find();
  });

  if (!Votes.find().count()) {
    console.log("here is where we put some data in the database");
    Polls.loadLatest();
  }
});
