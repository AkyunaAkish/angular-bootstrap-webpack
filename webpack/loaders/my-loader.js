module.exports = function (source) {
    console.log('src', source);
    return source;
};

// to use in webpack file: 
// resolveLoader: {
//     modules: ['node_modules', path.resolve(__dirname, 'loaders')]
// }

// use: 'my-loader'