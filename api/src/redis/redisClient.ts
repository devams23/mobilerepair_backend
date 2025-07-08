
import { createClient } from 'redis';

const redisclient = createClient({
  socket: {
    host: 'localhost',    
    port: 6379,
  }
});

redisclient.on('error', err => console.log('Redis Client Error', err));
redisclient.on("connect", () => console.log("Redis client connected..."));
(async () => {
  await redisclient.connect();  
})();
 

export default redisclient; 