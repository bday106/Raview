Meteor.startup(function () {
  if (Reviews.find().count() === 0) {
    var reviews = [
      {'name': 'Anonymous',
        'description': 'Jack was awesome, a lot of fun!',
        'rating': '100',
        'time': '10 days ago'},
      {'name': 'Anonymous',
        'description': 'Engaging, need to bring the family next time.',
        'rating': '99'},
      {'name': 'Anonymous',
        'description': 'I just wish he played more of the hits!',
        'rating': '94'}
    ];
    for (var i = 0; i < reviews.length; i++) {
      Reviews.insert({name: reviews[i].name, description: reviews[i].description, rating: reviews[i].rating});
    }
  }
  // Items.remove();
  // if (Items.find().count() === 0) {
  //   var items = [
  //   {'id': 'jackjohnson',
  //     'name': 'Jack Johnson Live',
  //     'description': 'Jack comes alive at the Greek!',
  //     'artist': 'Jack Johnson',
  //     'pic': 'img/music/jackjohnson_concert.png',
  //     'artist_pic': 'img/music/jackjohnson.jpg'},
  //   {'id': 'greenday',
  //     'name': 'American Idiot',
  //     'description': 'The number one Green Day album!',
  //     'artist': 'Green Day',
  //     'pic': 'img/music/greenday_album.jpg',
  //     'artist_pic': 'img/music/greenday.jpeg'},
  //   {'id': 'qotsa',
  //     'name': 'Queens Of The Stone Age Festival',
  //     'description': 'Catch QOTSA on their summer tour!',
  //     'artist': 'Queens Of The Stone Age',
  //     'pic': 'img/music/qotsa_concert.jpg',
  //     'artist_pic': 'img/music/qotsa.jpg'},
  //   {'id': 'foofighters',
  //     'name': 'Here Come the Foo Fighters',
  //     'description': 'Look out for them in town',
  //     'artist': 'Foo Fighters',
  //     'pic': 'img/music/foofighters_concert.jpg',
  //     'artist_pic': 'img/music/foofighters.jpg'},
  //   {'id': 'blink182',
  //     'name': 'Blink-182',
  //     'description': 'The self-titled album',
  //     'artist': 'Blink-182',
  //     'pic': 'img/music/blink182_album.jpg',
  //     'artist_pic': 'img/music/blink182.jpg'}
  //     ];
  //     for (var i = 0; i < items.length; i++) {
  //       Items.insert({id: items[i].id, name: items[i].name, description: items[i].description, artist: items[i].artist, pic: items[i].pic, artist_pic: items[i].artist_pic});
  //     }
  // }
  // if (NightlifeItems.find().count() === 0) {
  //   var items = [
  //   {'id': Math.random() + 'jackjohnson',
  //     'name': 'Jack Johnson Live',
  //     'description': 'Jack comes alive at the Greek!',
  //     'artist': 'Jack Johnson',
  //     'pic': 'img/music/jackjohnson_concert.png',
  //     'artist_pic': 'img/music/jackjohnson.jpg'},
  //   {'id': Math.random() + 'greenday',
  //     'name': 'American Idiot',
  //     'description': 'The number one Green Day album!',
  //     'artist': 'Green Day',
  //     'pic': 'img/music/greenday_album.jpg',
  //     'artist_pic': 'img/music/greenday.jpeg'},
  //   {'id': Math.random() + 'qotsa',
  //     'name': 'Queens Of The Stone Age Festival',
  //     'description': 'Catch QOTSA on their summer tour!',
  //     'artist': 'Queens Of The Stone Age',
  //     'pic': 'img/music/qotsa_concert.jpg',
  //     'artist_pic': 'img/music/qotsa.jpg'},
  //   {'id': Math.random() + 'foofighters',
  //     'name': 'Here Come the Foo Fighters',
  //     'description': 'Look out for them in town',
  //     'artist': 'Foo Fighters',
  //     'pic': 'img/music/foofighters_concert.jpg',
  //     'artist_pic': 'img/music/foofighters.jpg'},
  //   {'id': Math.random() + 'blink182',
  //     'name': 'Blink-182',
  //     'description': 'The self-titled album',
  //     'artist': 'Blink-182',
  //     'pic': 'img/music/blink182_album.jpg',
  //     'artist_pic': 'img/music/blink182.jpg'}
  //     ];
  //     for (var i = 0; i < items.length; i++) {
  //       NightlifeItems.insert({id: items[i].id, name: items[i].name, description: items[i].description, artist: items[i].artist, pic: items[i].pic, artist_pic: items[i].artist_pic});
  //     }
  // }
});