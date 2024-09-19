import express from "express";
import {authenticateToken} from "../middleware/auth";

const router = express.Router();

router.get('/test', authenticateToken, (req, res) => {
    const user = req.user;

    res.json({
        message: 'Firebase authentication successful!',
        user: {
            uid: user.uid,
            email: user.email,
            name: user.name || 'No display name',
        },
    });
});

export default router;