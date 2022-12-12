var convict = require('convict');
convict.addFormat(require('convict-format-with-validator').url);

var conf = convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV'
    },
    port: {
        doc: "The port to bind.",
        format: "port",
        default: 3001,
        env: "PORT"
    },
    url: {
        format: "url",
        default: 'http://localhost:3000/',
        env: "URL"
    }
});

var env = conf.get('env');

conf.validate();

module.exports = conf;
