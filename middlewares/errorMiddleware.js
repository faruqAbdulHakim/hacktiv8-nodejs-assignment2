const errorMiddleware = (error, req, res, next) => {
  let code = 500;
  let message = 'Internal Server Error';
  switch (error) {
    case 'JsonWebTokenError':
      code = 401;
      message = 'Invalid Token';
      break;
    case 'BadRequest':
      code = 400;
      message = 'Bad Request';
      break;
    case 'UserNotFound':
      code = 400;
      message = 'Name/Password Wrong';
      break;
    case 'PasswordWrong':
      code = 400;
      message = 'Name/Password Wrong';
      break;
  }
  res.status(code).json({ message });
};

export default errorMiddleware;
