import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const ErrorResponseInterceptor: HttpInterceptorFn = (request, next) =>
  next(request).pipe(catchError(handleErrorResponse));

const handleErrorResponse = (error: HttpErrorResponse) => {
  console.error(error);
  //! Call a logger service
  //! Send the error to a monitoring service
  //! Show error message to the user
  return throwError(() => 'error');
};
