const multiple = {
    index: {
        entry: 'src/main.js',
        chunks: ['index']
    }
};

const entry = {};

Object.keys(multiple).forEach((value) => {
    if (!multiple[value].template) {
        multiple[value].template = 'public/index.html'
    }
    multiple[value].filename = `${value}.html`
    if (multiple[value].chunks.length) {
        multiple[value].chunks = [...new Set(['chunk-vendors', 'chunk-common'].concat(multiple[value].chunks))]
    }
    entry[value] = multiple[value];
});

module.exports = entry;