import express, { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Perform middleware logic here
  console.log("Middleware executed");
  next();
};
