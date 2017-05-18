var sitemap = require('../build/sitemap.json');

module.exports = {
	dist: {
		files: {
            '<%= paths.build.styles %>styles.css': sitemap
        }
	}
}
