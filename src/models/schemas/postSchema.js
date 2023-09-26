import { body } from "express-validator";

export const postSchema = [
    body('title')
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body('description')
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body('poster')
        .isURL().withMessage('Ingrese una url valida')
        .notEmpty().withMessage('No debe ser vacio'),
]

export const editPostSchema = [
    body('title')
        .optional()
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body('content')
        .optional()
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body('poster')
        .optional()
        .isURL().withMessage('Ingrese una url valida')
        .notEmpty().withMessage('No debe ser vacio'),
]

export const createPostSchema = [
    body('title')
        .optional()
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body('content')
        .optional()
        .isString().withMessage('Debe ser string')
        .notEmpty().withMessage('No debe ser vacio'),
    body('poster')
        .optional()
        .isURL().withMessage('Ingrese una url valida')
        .notEmpty().withMessage('No debe ser vacio'),
]

