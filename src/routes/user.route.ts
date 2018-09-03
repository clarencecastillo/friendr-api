import { Router, Request, Response } from 'express';

const router: Router = Router();

router.post('/register', (req: Request, res: Response) => {
  res.send('register');
});

router.post('/resetpassword', (req: Request, res: Response) => {
  res.send('resetpassword');
});

export const userRouter: Router = router;