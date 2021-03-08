const
    dest = './dist/images',
    fsp = require('fs').promises,
    imagemin = require('imagemin'),
    plugins = [
        require('imagemin-mozjpeg'),
        require('imagemin-pngquant')({ strip: true }),
        require('imagemin-svgo')()
    ];

module.exports = class {

    data() {
        return {
            permalink: false,
            eleventyExcludeFromCollections: true
        }
    }

    // process all files
    async render() {
        
        // destination already exist?
        try {
            let dir = await fsp.stat(dest)
            if (dir.isDirectory())
                return true
        } catch (e) { }

        console.log('Optimizing images')

        await imagemin(['src/images/*', '!src/images/*js'], {
            destination: dest,
            plugins

        });

        return true

    }
        
    }