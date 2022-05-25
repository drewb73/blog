const express = require("express");
const { createCommentCtrl } = require("../../controllers/comments/commentCtrl");
const authMiddleware = require("../../middleware/auth/authMiddleware");

const CommentRoutes = express.Router();

CommentRoutes.post("/", authMiddleware, createCommentCtrl);

module.exports = CommentRoutes;
