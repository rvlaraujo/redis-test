const Strings = (redis) => {

  redis.set('name', 'Emmauel');
  redis.get('name', (err, result) => {
    console.log(result);
  });

  const showAddress = () => {
    redis.get('address', (err, result) => {
      console.log(result);
    });
  }

  redis.incrby('address', 300);
  showAddress();

  redis.mset('candidate', 'Rafael', 'cpf', '012.034.153-03');
  redis.mget('candidate', 'cpf', (err, result) => {
    console.log(result);
  });
}

export default Strings;