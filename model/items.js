Items = new Mongo.Collection("items");

Items.allow({
	insert: function (userId, item) {
		return userId;
	}
});