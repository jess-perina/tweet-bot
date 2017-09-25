console.log('Bot is starting.');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

// Setting up a user stream
const stream = T.stream('user');

//Anytome someone follows me
stream.on('follow', followed);

function followed(event) {
  const name = event.source.name;
  const screenName = event.source.screen_name;
}

// Get tweets based on a term
// T.get('search/tweets', { q: 'unicorn', count: 2 }, function(err, data, response) {
//   if (err) console.error(err);

//   let tweets = data.statuses;
//   tweets.forEach(tweet => {console.log(tweet.text);});
// });


// Post tweet
T.post('statuses/update', { status: 'test tweet' }, function(err, data, response) {
  if (err) console.error(err.message);

  console.log(data);
});


// search for all tweets with a given term and compose a tweet based on those
// write a pixel sorting npm module 
