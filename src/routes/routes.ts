import Router from 'express';

const router = Router();


router.get('/',(req:Router.Request,res:Router.Response,next:Router.NextFunction)=>{
console.log("hello-world");
})

export default router;