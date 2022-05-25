const express = require("express");
const { createCommentCtrl, fetchAllCommentsCtrl, fetchCommentCtrl, updateCommentCtrl, deleteCommentCtrl } = require("../../controllers/comments/commentCtrl");
const authMiddleware = require("../../middleware/auth/authMiddleware");

const CommentRoutes = express.Router();

CommentRoutes.post("/", authMiddleware, createCommentCtrl);
CommentRoutes.get("/", authMiddleware, fetchAllCommentsCtrl);
CommentRoutes.get("/:id", authMiddleware, fetchCommentCtrl);
CommentRoutes.put("/:id", authMiddleware, updateCommentCtrl);
CommentRoutes.delete("/:id", authMiddleware, deleteCommentCtrl);

module.exports = CommentRoutes;
