import body  from "express-validator";

export const createPostSchema = [
  body('title')
    .isString().withMessage('Title must be a string')
    .notEmpty().withMessage('Title cannot be empty'),
  body('content')
    .isString().withMessage('Content must be a string')
    .notEmpty().withMessage('Content cannot be empty'),
];

export const editPostSchema = [
  body('title')
    .optional()
    .isString().withMessage('Title must be a string')
    .notEmpty().withMessage('Title cannot be empty'),
  body('content')
    .optional()
    .isString().withMessage('Content must be a string')
    .notEmpty().withMessage('Content cannot be empty'),
];
