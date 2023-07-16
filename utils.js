const { dialog } = window.electron;

exports.browseFile = function() {
    return dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
        ]
    }).then(result => {
        if (!result.canceled) {
            return result.filePaths[0];
        }
    }).catch(err => {
        console.log(err);
    });
}

exports.browseDirectory = function() {
    return dialog.showOpenDialog({
        properties: ['openDirectory']
    }).then(result => {
        if (!result.canceled) {
            return result.filePaths[0];
        }
    }).catch(err => {
        console.log(err);
    });
}
