import { userModel } from '../models/user';
import jwt from 'jsonwebtoken'; 
import bcrypt from 'bcrypt'; 

// Controlador para el signup
export const userSignupController = async (req, res) => {
  try {
    const { firstname, lastname, email, username, password, profile_image } = req.body;

    // Verificamos si el usuario ya existe en la base de datos
    const existingUser = await userModel.findOne({ where: { username } });
    
    if (existingUser) {
      return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
    }

    // Creamos un nuevo usuario
    const newUser = await userModel.create({ firstname, lastname, email, username, password, profile_image });

    return res.status(201).json({ message: 'Usuario registrado con éxito.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Controlador para el login
export const userLoginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificamos si el usuario existe en la base de datos
    const user = await userModel.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales incorrectas.' });
    }

    // Verificamos la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales incorrectas.' });
    }

    // Generamos un token de autenticación (JWT) si las credenciales son válidas
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Enviamos el token como respuesta
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};


