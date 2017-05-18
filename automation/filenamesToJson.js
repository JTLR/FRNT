module.exports = {
  options : {
      fullPath : true,
      extensions : true
    },
    
    files : '<%= paths.build.views %>/**/*.html',
    destination : 'build/sitemap.json'
}