import {Request, Response} from "express"

export const health = async (req: Request, res: Response) => {
  try {
    return res.json({
      message: 'API is Healthy',
    })
  } catch (e) {
    console.error(e);
    return res.json({});
  }
}