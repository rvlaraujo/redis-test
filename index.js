import Redis from 'ioredis';

const redis = new Redis({
  host: 'redis', 
  port: '6379',
  password: 'root',
  db: 0
});

redis.set('name', 'Emmauel');
redis.get('name', (err, result) => {
  console.log(result);
})