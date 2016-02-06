require.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: '../lib/jquery',
        d3: '../lib/d3',
        text : '../lib/text',
        json: '../lib/json'
    }
});

require(['app/main']);