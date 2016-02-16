require.config({
    baseUrl: 'js',
    paths: {
        app: 'app',
        jquery: 'lib/jquery.min',
        d3: 'lib/d3.min',
        text : 'lib/text',
        json: 'lib/json'
    }
});

require(['app/main']);