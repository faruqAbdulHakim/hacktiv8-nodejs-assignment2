/**
 *
 * @param {string} contentType
 * @returns {Function}
 */
const contentTypeMiddleware = (contentType) => {
  return (req, res, next) => {
    if (req.headers['content-type'] !== contentType) {
      next('InvalidContentType');
    }
    next();
  };
};

export default contentTypeMiddleware;
