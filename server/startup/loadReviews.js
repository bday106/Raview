Meteor.startup(function () {
  if (Reviews.find().count() === 0) {
    var reviews = [
      {'name': 'Name1',
        'description': 'Desc1'},
      {'name': 'Name2',
        'description': 'Desc2'},
      {'name': 'Name3',
        'description': 'Desc3'}
    ];
    for (var i = 0; i < reviews.length; i++)
      Reviews.insert({name: reviews[i].name, description: reviews[i].description});
  }
});