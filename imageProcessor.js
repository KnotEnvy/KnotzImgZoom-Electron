const sharp = require('sharp');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');

exports.processImage = function(imageFile, videoDuration, fps, outputDir, startPosition, updateProgress, updateStatus) {
    // Calculate the number of frames based on the duration
    const numFrames = videoDuration * fps;

    // Load the image
    sharp(imageFile)
    .metadata()
    .then(metadata => {
        // Calculate the size of the initial zoomed-in area as a fraction of the image size
        const fraction = 0.05;
        const cropWidth = Math.round(metadata.width * fraction);
        const cropHeight = Math.round(metadata.height * fraction);

        // Set the coordinates for the starting frame based on the selected start position
        let left, top;
        switch (startPosition) {
            case 'topLeft':
                left = 0;
                top = 0;
                break;
            case 'topRight':
                left = metadata.width - cropWidth;
                top = 0;
                break;
            case 'bottomLeft':
                left = 0;
                top = metadata.height - cropHeight;
                break;
            case 'bottomRight':
                left = metadata.width - cropWidth;
                top = metadata.height - cropHeight;
                break;
            case 'centerTop':
                left = (metadata.width - cropWidth) / 2;
                top = 0;
                break;
            case 'centerBottom':
                left = (metadata.width - cropWidth) / 2;
                top = metadata.height - cropHeight;
                break;
            case 'center':
                left = (metadata.width - cropWidth) / 2;
                top = (metadata.height - cropHeight) / 2;
                break;
        }

            // Create the video
            ffmpeg()
                .input(path.join(outputDir, 'frame_%d.png'))
                .inputFPS(fps)
                .output(path.join(outputDir, 'zoom_effect.mp4'))
                .on('end', () => {
                    // Update status
                    updateStatus('Processing complete!');
                })
                .run();
        })
        .catch(err => {
            console.error(err);
        });
}
