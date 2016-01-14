import {
Router,
Request,
Response
} from 'express';


const router = Router();
export = router;

router
  .get('/',
    function (req: Request, res: Response, next: Function) {
        res.render('index');
    });
