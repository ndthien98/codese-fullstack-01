const redis = require('redis')
const bluebird = require('bluebird')

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const redisClient = redis.createClient(process.env.REDIS_URL);

redisClient.on('error', err => {
  console.log('Error ' + err);
  redisClient.quit();
});

redisClient.on('connect', err => {
  console.log(`Connected to redis ${redisClient}`);
});

module.exports = redisClient