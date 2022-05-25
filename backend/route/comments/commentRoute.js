const express = require("express");
const { createCommentCtrl, fetchAllCommentsCtrl } = require("../../controllers/comments/commentCtrl");
const authMiddleware = require("../../middleware/auth/authMiddleware");

const CommentRoutes = express.Router();

CommentRoutes.post("/", authMiddleware, createCommentCtrl);
CommentRoutes.get("/", authMiddleware, fetchAllCommentsCtrl);

module.exports = CommentRoutes;
