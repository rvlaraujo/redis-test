import Redis from 'ioredis';
import Strings from './strings';
import Hashes from './hashes';
import Lists from './lists';

const redis = new Redis({
  host: 'redis-master',
  port: '6379',
  password: 'root',
  db: 0
});

Strings(redis);
Hashes(redis);
Lists(redis);