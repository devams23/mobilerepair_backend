
import { createClient } from 'redis';

const redisclient = createClient({
  socket: {
    host: 'localhost',    
    port: 6379,
  }
});

(async () => {
  await redisclient.connect();  
})();

redisclient.on('error', err => console.log('Redis Client Error', err));
redisclient.on("connect", () => console.log("Redis client connected...")); 

export default redisclient; 