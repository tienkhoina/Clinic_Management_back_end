const { handleUserLogin } = require('../services/user-services');

let checkLogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Kiểm tra nếu thiếu email hoặc password
    if (!email || !password) {
        return res.status(400).json({
            errCode: 1,
            message: 'Missing email or password!',
        });
    }

    // Log email và password để kiểm tra
    console.log('Email:', email, 'Password:', password);

    // Gửi phản hồi OK
    return res.status(200).json({
        errCode: 0,
        message: 'Login successful!',
        email: email,
    });
}

module.exports = { checkLogin };
