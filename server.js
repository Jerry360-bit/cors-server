const corsProxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable.
const port = process.env.PORT || 443;

corsProxy.createServer({
    originWhitelist: ['localhost:3000', 'localhost:3000/dashboard/settings', 'https://spots.portableprojects.nl'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
