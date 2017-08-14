import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  var github = new GitHub({
    version: "3.0.0", // required
    timeout: 5000     // optional
  });

  github.user.getFollowingFromUser({
    user: "ndhoule"
  }, function(err, res) {
    console.log(JSON.stringify(res));
  });
});
