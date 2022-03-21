export default function (redis) {
  redis.rpush('planets', 'veuns', 'earth', 'mars', 'jupiter');

  redis.rpush('planets', 'saturn');
  redis.lpush('planets', 'mercury');
  redis.rpop('planets');
  redis.lpop('planets');
  redis.lrange('planets', 0, -1, (err, result) => {
    console.log(result);
  });
}