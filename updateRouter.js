const replace = require('replace-in-file');

const routers = process.argv.slice(2);

replace.sync({
	files: 'src/js/index.js',
	from: new RegExp(routers[0], 'g'),
	to: routers[1],
});
