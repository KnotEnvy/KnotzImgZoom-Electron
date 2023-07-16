# Image Zoom-Out Video Generator

This is a multi-platform desktop application built with Electron.js that generates a zoom-out video from an image. The user can select an image, set the video duration and frames per second, choose the output directory, and select the start position of the zoom effect.

## Features

- Select an image file
- Set the video duration in seconds
- Set the frames per second
- Choose the output directory
- Select the start position of the zoom effect
- Generate a zoom-out video from the image

## Installation

Before you can run the application, you need to install Node.js and npm. You can download Node.js from [here](https://nodejs.org/en/download/) and npm is included in the Node.js installation.

After installing Node.js and npm, you can clone the repository and install the dependencies:

```bash
git clone https://github.com/KnotEnvy/KnotzImgZoom-Electron.git
cd KnotzImgZoom-Electron
npm install
```

This will install all the necessary dependencies listed in the `package.json` file.

## Usage

To start the application, run the following command in the project directory:

```bash
npm start
```

This will start the Electron application.

## Dependencies

This project uses the following dependencies:

- [Electron](https://www.electronjs.org/)
- [Sharp](https://sharp.pixelplumbing.com/)
- [Fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)
- [@electron/remote](https://github.com/electron/remote)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

---
