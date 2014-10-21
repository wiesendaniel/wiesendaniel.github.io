var colorize = function () {

    var baseColor = Please.make_color({
        format: 'hsv'
    });

    var colorSet = Please.make_scheme( {
        h: baseColor['h'],
        s: baseColor['s'],
        v: baseColor['v']
    }, {
        scheme_type: 'triadic', //set scheme type
        format: 'hex' //give it to us in rgb
    });

    // Background Color
    document.body.style.backgroundColor = colorSet[0];
};

colorize();