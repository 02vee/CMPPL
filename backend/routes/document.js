const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// Route to fetch documents
router.get("/", (req, res) => {
    fs.readdir("uploads", (err, files) => {
        if (err) return res.status(500).json({ message: "Error reading files" });
        const documents = files.map(file => ({
            id: file,
            name: file,
            url: `/uploads/${file}`,
        }));
        res.json({ documents });
    });
});

// Route to upload documents
router.post("/upload", upload.array("files"), (req, res) => {
    res.json({ message: "Files uploaded successfully" });
});

// Route to delete a document
router.delete("/:id", (req, res) => {
    const filePath = path.join("uploads", req.params.id);
    fs.unlink(filePath, (err) => {
        if (err) return res.status(500).json({ message: "Error deleting file" });
        res.json({ message: "File deleted successfully" });
    });
});

module.exports = router;