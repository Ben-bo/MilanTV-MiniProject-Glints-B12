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
    const validate = await schema.validate({ rating: req.body.rating });
    if (validateAuth.error) {
      res.send({
        status: 500,
        message: "missing token",
        data: validateAuth.error.details,
      });
    }
    if (validate.error) {
      res.send({
        status: 500,
        message: "rating cannot be empty",
        data: validate.error.details,
      });
    }

    const idMovie = req.params.movie_id;
    req.body.userId = req.user.id;
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
