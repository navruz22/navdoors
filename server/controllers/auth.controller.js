const { validateUserSignUp } = require('../models/User');
const { bcrypt, jwt, config } = require('../packages');
const UserService = require('../services/UserService')


module.exports = class Auth {
    static async createUser(req, res, next) {
        try {
            const { error } = validateUserSignUp(req.body);
            if (error) {
                return res.status(400).json({
                    error: error.message,
                });
            }

            const { username, password } = req.body;
            const user = await UserService.getUserByParams({ username: username });
            if (user) {
                return res.status(400).json({
                    message: "User is already exist!",
                });
            }

            const passwordHash = await bcrypt.hash(password, 12);

            const newUser = await UserService.createUser({
                ...req.body,
                password: passwordHash,
            });
            await newUser.save();

            res.json(newUser);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }

    static async loginUser(req, res, next) {
        try {
            const { username, password } = req.body;

            const user = await UserService.getUserByParams({ username })
            if (!user) {
                return res.status(400).json({ message: "User is not found!" })
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Неверный пароль" });
            }

            jwt.sign({ 
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username, 
                type: user.type
             }, config.get("JWT_SECRET"), {}, (err, token) => {
                if (err) {
                    return res.status(400).json({
                        error: err.message,
                    });
                }
                return res.status(200).json(token);
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error })
        }
    }
}