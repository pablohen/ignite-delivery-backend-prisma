import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export async function ensureAuthDeliveryman(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token is missing",
    });
  }

  const [_, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      process.env.SECRET_KEY_DELIVERYMAN!
    ) as Payload;

    req.id_deliveryman = sub;

    return next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}
