import path from 'path';
module.exports = {
    entry: './gulpfile.js',
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    }
};