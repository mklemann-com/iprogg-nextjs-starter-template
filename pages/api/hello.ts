// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface IApiHelloRequest extends NextApiRequest {
  body: { name?: string };
}

export type IApiHelloResponseData = {
  name?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IApiHelloResponseData>
) {
  const {
    body: { name },
  } = req;
  if (req.method === 'POST' && name && name.length > 0) {
    res.status(200).json({ name });
  } else {
    res.status(400).json({});
  }
}
