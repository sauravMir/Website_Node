module.exports = function(app) {
 
    app.get('/about', function(req, res){
        res.render('about');
    });
    app.post('/contact',function(req, res){
        res.render('contat');
    });

}