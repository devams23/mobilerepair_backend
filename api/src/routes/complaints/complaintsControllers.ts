import { Request, Response } from "express";
import redisclient from "../../redis/redisClient";

type Location = {
  latitude: number;
  longitude: number;
};

export function getComplaints(req: Request, res: Response) {
  res.status(200).send("List of complaints");
}
export async function  createComplaints(req: Request, res: Response) {
  console.log(req.body);
  const { userId, complaintId ,mobile, mobile_model, complaint_text, latitude, longitude } = req.body;
  try {
    const drivers = await getAvailableDrivers({ latitude, longitude });
    console.log(drivers);
    res.status(200).send("new complaint created");

  } catch (error) {
    console.error(error);
    res.status(404).send("error registering a complaint");
  }
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
      unit: "km", // distance units
    }
  );

  return drivers;
}
