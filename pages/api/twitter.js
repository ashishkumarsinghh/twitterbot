const Twit = require('twit');

const T = new Twit({
	consumer_key: process.env.TAK,
	consumer_secret: process.env.TAKS,
	access_token: process.env.TATK,
	access_token_secret: process.env.TATS,
});

export default (req, res) => {
	const response = getTweets('javascript');
	res.send(response);
};

const getTweets = async term => {
	const tweets, response
	try {
		 response = await T.get('search/tweets', { q: term, count: 5 });
		 tweets = await response.json();
	} catch (err) {
		console.log(err);
	}
	return tweets;
};
