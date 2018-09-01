import { Router, Request, Response } from 'express';

const router: Router = Router();

router.post('/login', (req: Request, res: Response) => {
  res.send('login');
});

router.post('/signup', (req: Request, res: Response) => {
  res.send('signup');
});

router.post('/resetpassword', (req: Request, res: Response) => {
  res.send('resetpassword');
});

export const account: Router = router;