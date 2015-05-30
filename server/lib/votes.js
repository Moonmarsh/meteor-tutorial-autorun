Polls = {
  loadLatest: function(){
    var votes = [
      {party:"Liberal"},
      {party:"Labor"},
      {party:"Liberal"},
      {party:"Labor"},
      {party: "Green"},
      {party: "Thinkers"}
    ];

    _.each(votes, function(r){
      Votes.insert({party: r.party, createdAt: Date.now()});
      console.log('adding ', r.party);
    });
  }
};
