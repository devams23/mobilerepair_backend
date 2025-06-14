import { Request, Response } from 'express';

export function getComplaints(req:Request, res:Response) {
  res.status(200).send('List of complaints');
}
export function createComplaints(req:Request, res:Response) {
  res.status(200).send('new complaint created');
}
export function updateComplaints(req:Request, res:Response) {
  res.status(200).send('update complaints');
}
export function getComplaintsById(req:Request, res:Response) {

  res.status(200).send('List of complaints by id');
}
export function deleteComplaints(req:Request, res:Response) {
  res.status(200).send('delete complaints by id');
}