import {
Router,
Request,
Response,
} from 'express';
import {
Promise
} from 'q';
import * as _ from 'lodash';

const router = Router();
export = router;

router
  .post('/',
  (req: Request, res: Response, next: Function) => {
    // some async action
    Promise<{}>((resolve: (data: {}) => void) => {
      setTimeout(() => {
        resolve(req.query);
      }, 500);
    })
      .then((data: {}) => {
        res.send(data); // as IDictionary<string, string>
      });
  })
  .get('/:param',
  (req: Request, res: Response, next: Function) => {
    res.send({
      param: req.params.param, // as a string
      query: req.query
    });
  });
