Reviews = new Mongo.Collection("reviews");

Reviews.allow({
  insert: function (userId, review) {
    return userId && review.owner === userId;
  },
  update: function (userId, review, fields, modifier) {
    if (userId !== review.owner)
      return false;

    return true;
  },
  remove: function (userId, review) {
    if (userId !== review.owner)
      return false;

    return true;
  }
});