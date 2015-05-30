Polls = {
  loadLatest: function(){
    var votes = [
      {party:"Liberal"},
      {party:"Labor"},
      {party:"Liberal"},
      {party:"Labor"},
      {party: "Green"},
      {party: "Sundried Red Tomato Party"}
    ];

    _.each(votes, function(r){
      Votes.insert({party: r.party, createdAt: Date.now()});
      console.log('adding ', r.party);
    });
  }
};
