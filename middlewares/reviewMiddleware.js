const jwt = require("jsonwebtoken");
const joi = require("joi");

const reviewMiddleware = {};
reviewMiddleware.validation = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const schemaAuth = joi
      .object({
        authorization: joi.string().required(),
      })
      .options({ abortEarly: false });
    const schema = joi
      .object({
        rating: joi.number().required(),
      })
      .options({ abortEarly: false });
    const validateAuth = await schemaAuth.validate({ authorization: token });
    const valtdate = await schema.validate(req.body);
    if (validateAuth.error) {
      res.send({
        status: 500,
        message: "missing token",
        data: validate.error.details,
      });
    }
    if (valtdate.error) {
      res.send({
        status: 500,
        message: "rating cannot be empty",
        data: validate.error.details,
      });
    }

    const decodedToken = await jwt.verify(token, "secret_key");
    const idMovie = req.params.movie_id;
    req.body.decodedToken = decodedToken;
    req.body.idMovie = idMovie;

    next();
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      message: "invalid token",
      data: error,
    });
  }
};

module.exports = reviewMiddleware;
