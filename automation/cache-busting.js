var jsonfile = require("jsonfile");

var filepath = "wp-content/themes/FRNT/cache-busting.json";
var object;

jsonfile.readFile(filepath, function (error, obj) {
    var hash =
        Math.random()
        .toString(36)
        .substring(2, 15) +
        Math.random()
        .toString(36)
        .substring(2, 15) +
        Math.random()
        .toString(36)
        .substring(2, 15) +
        Math.random()
        .toString(36)
        .substring(2, 15);

    obj[process.argv[2]] = hash;

    jsonfile.writeFile(filepath, obj, function (error) {
        if (error) {
            console.error(error);
        } else {
            console.log(process.argv[2], "hash set to", hash);
        }
    });
});
