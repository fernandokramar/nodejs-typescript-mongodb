import { Request, Response } from 'express';

const myMiddleware = (req: Request, res: Response, next: any) => {

    console.log('my middleware working with TS');
    next();
    
}

export default myMiddleware;