const Joi = require("joi");

exports.register = async (req, res, next) => {
  try {
    const registerSchema = Joi.object({
      full_name: Joi.string().required(),

      password: Joi.string().min(7).required(),

      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
    }).options({ abortEarly: false });

    const validateRegisterRequest = await registerSchema.validate({
      ...req.body,
    });

    if (validateRegisterRequest.error) {
      return res.status(400).send({
        statusText: "Bad Request",
        message: validateRegisterRequest.error.message,
      });
    }

    next();
  } catch (error) {
    res.send(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const loginSchema = Joi.object({
      password: Joi.string().min(7).required(),

      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
    }).options({ abortEarly: false });

    const validateLoginRequest = await loginSchema.validate({
      ...req.body,
    });

    if (validateLoginRequest.error) {
      return res.status(400).send({
        statusText: "Bad Request",
        message: validateLoginRequest.error.message,
      });
    }

    next();
  } catch (error) {
    res.send(error);
  }
};

exports.updateUserProfile = async (req, res, next) => {
  try {
    const updateUserSchema = Joi.object({
      full_name: Joi.string().required(),

      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),

      photo_path: Joi.string(),
    }).options({ abortEarly: false });

    const validateUpdateUserRequest = await updateUserSchema.validate({
      ...req.body,
    });

    if (validateUpdateUserRequest.error) {
      return res.status(400).send({
        statusText: "Bad Request",
        message: validateUpdateUserRequest.error.message,
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.changePassword = async (req, res, next) => {
  try {
    const changePasswordSchema = Joi.object({
      password: Joi.string().min(7).required(),

      new_password: Joi.string().min(7).required(),
      confirm_password: Joi.ref("new_password"),
    }).options({ abortEarly: false });

    const validateChangePasswordRequest = await changePasswordSchema.validate({
      ...req.body,
    });

    if (validateChangePasswordRequest.error) {
      return res.status(400).send({
        statusText: "Bad Request",
        message: validateChangePasswordRequest.error.message,
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addReview = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const schemaAuth = Joi.object({
      authorization: Joi.string().required(),
    }).options({ abortEarly: false });
    const schema = Joi.object({
      rating: Joi.number().required(),
    }).options({ abortEarly: false });
    const validateAuth = await schemaAuth.validate({ authorization: token });
    const validate = await schema.validate({ rating: req.body.rating });
    if (validateAuth.error) {
      res.status(400).json({
        statusText: "Bad Request",
        message: validateAuth.error.message,
      });
    }
    if (validate.error) {
      res.status(400).json({
        statusText: "Bad Request",
        message: validate.error.message,
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

exports.addAndUpdateMoview = async (req, res, next) => {
  try {
    const addAndUpdateMovieSchema = Joi.object({
      title: Joi.string().required(),
      synopsis: Joi.string().required(),
      release_date: Joi.date().required(),
      featured_song: Joi.string().required(),
      budget: Joi.number().integer().required(),
      language: Joi.string().required(),
      duration: Joi.number().integer().required(),
      poster_path: Joi.string().required(),
      trailer_path: Joi.string().required(),
      genre: Joi.string().required(),
    }).options({ abortEarly: false });

    const validateAddAndUpdateMovieRequest =
      await addAndUpdateMovieSchema.validate({
        ...req.body,
      });

    if (validateAddAndUpdateMovieRequest.error) {
      return res.status(400).send({
        statusText: "Bad Request",
        message: validateAddAndUpdateMovieRequest.error.message,
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addAndUpdateActor = async (req, res, next) => {
  try {
    const addAndUpdateSchema = Joi.object({
      character_name: Joi.string().required(),
      real_name: Joi.string().required(),
      photo_path: Joi.string().required(),
    }).options({ abortEarly: false });

    const validateAddAndUpdateActorRequest = await addAndUpdateSchema.validate({
      ...req.body,
    });

    if (validateAddAndUpdateActorRequest.error) {
      return res.status(400).send({
        statusText: "Bad Request",
        message: validateAddAndUpdateActorRequest.error.message,
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addAndUpdateGenre = async (req, res, next) => {
  try {
    const addAndUpdateSchema = Joi.object({
      name: Joi.string().required(),
    }).options({ abortEarly: false });

    const validateAddAndUpdateGenreRequest = await addAndUpdateSchema.validate({
      ...req.body,
    });

    if (validateAddAndUpdateGenreRequest.error) {
      return res.status(400).send({
        statusText: "Bad Request",
        message: validateAddAndUpdateGenreRequest.error.message,
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
