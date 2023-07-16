const { dialog } = window.electron; // Change this line

const path = require('path');
const imageProcessor = require('./imageProcessor');

document.getElementById('imageFile').addEventListener('change', (event) => {
    document.getElementById('imageFile').value = event.target.files[0].path;
});

document.getElementById('outputDir').addEventListener('change', (event) => {
    document.getElementById('outputDir').value = event.target.files[0].path;
});

document.getElementById('generateBtn').addEventListener('click', () => {
    const imageFile = document.getElementById('imageFile').value;
    const videoDuration = document.getElementById('videoDuration').value;
    const fps = document.getElementById('fps').value;
    const outputDir = document.getElementById('outputDir').value;
    const startPosition = document.getElementById('startPosition').value;

    imageProcessor.processImage(imageFile, videoDuration, fps, outputDir, startPosition, updateProgress, updateStatus);
});

function updateProgress(progress) {
    document.getElementById('progress').value = progress;
}

function updateStatus(status) {
    document.getElementById('status').innerText = status;
}
