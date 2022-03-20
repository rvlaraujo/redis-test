const Hashes = (redis) => {
  redis.hmset('user:123', 'firstName', 'Jeremy', 'lastName', 'Henri');
  redis.hmset('user:123', 'age', 5);
  redis.hincrby('user:123', 'age', 10);

  redis.hgetall('user:123', (err, result) => {
    console.log(result);
  });
};

export default Hashes;