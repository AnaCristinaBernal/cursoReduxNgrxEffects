import { HttpInterceptorFn } from '@angular/common/http';

export const httpHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({
    setHeaders: {
      'x-api-key': 'reqres-free-v1'
    }
  });

  return next(newReq);
};
