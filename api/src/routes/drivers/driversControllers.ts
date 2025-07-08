import { Request, Response } from "express";
import redisclient from "../../redis/redisClient";

export function getDrivers(req: Request, res: Response) {
  res.status(200).send("List of drivers");
}   

export async function updateDriverLocation(req: Request, res: Response) {
  const { driverId, latitude ,longitude } = req.body;
  console.log('req.body', req.body);
  console.log(typeof(latitude));
  try {
    await redisclient.GEOADD('drivers', {
      longitude: longitude,
      latitude: latitude, 
      member: String(driverId), 
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err); 
    res.status(500).json({ error: 'Could not update location' });
  }
  
}