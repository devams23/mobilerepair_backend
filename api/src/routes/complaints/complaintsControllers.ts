import { Request, Response } from "express";
import redisclient from "../../redis/redisClient";

type Location = {
  latitude: number;
  longitude: number;
};

export function getComplaints(req: Request, res: Response) {
  res.status(200).send("List of complaints");
}
export function createComplaints(req: Request, res: Response) {
  const { complaintId, description, status, latitude, longitude } = req.body;
  try {
    console.log(getAvailableDrivers({ latitude, longitude }));
  } catch (error) {}
  res.status(200).send("new complaint created");
}
export function updateComplaints(req: Request, res: Response) {
  res.status(200).send("update complaints");
}
export function getComplaintsById(req: Request, res: Response) {
  res.status(200).send("List of complaints by id");
}
export function deleteComplaints(req: Request, res: Response) {
  res.status(200).send("delete complaints by id");
}

async function getAvailableDrivers(complaintLocation: Location) {
  const drivers = await redisclient.geoSearch(
    "drivers",
    {
      longitude: complaintLocation.longitude,
      latitude: complaintLocation.latitude,
    },
    {
      radius: 5000, // 5 km radius
      unit: "km", // meters
    }
  );

  return drivers;
}
