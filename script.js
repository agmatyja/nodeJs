process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case '/exit': 
				process.stdout.write('Quitting app!\n');
				process.exit()
				break;
			case '/version': 
				process.stdout.write('Version:\t' + process.versions.node + '\nLanguage:\t' + process.env.LANG + '\n');
				break;	
			default: 
				process.stdout.write('Wrong instruction!\n');
				break;
		}
	}
});