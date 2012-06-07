

exports.index = function(req, res){
    //res.render('index', { title: 'Welcome to Birdway!' })
    var realpath =  global.BASE_DIR + '/static/' + global.Module.url.parse('index.html').pathname;
    var txt = global.Module.fs.readFileSync(realpath);

    res.end(txt);
};

exports.properties = function(req, res){
    //res.render('index', { title: 'Welcome to Birdway!' })
    var realpath =  global.BASE_DIR + '/config/' + global.Module.url.parse('mongodb.properties').pathname;
//    try {
//
//    } catch (err) {
//
//    }
    var txt = global.Module.fs.readFileSync(realpath);

    res.end(txt);
};

//exports.notfound = function(req, res){
//
//
//}