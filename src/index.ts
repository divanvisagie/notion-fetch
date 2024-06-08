type Args = {
	help: boolean;
}

enum ArgsErrorType {	
	UnknownArgument = 'unknown-argument',
}

const parseArgs = (args: string[]): Args | ArgsErrorType => {
	const result: Args = {
		help: false
	};
	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		switch (arg) {
			case '--help':
				result.help = true;
				return result
			default:
				return ArgsErrorType.UnknownArgument
		}
	}
	// if we havent hit anything yet we should show help
	result.help = true;
	return result;
}

const getHelp = () => {
	return `Usage: notion-fetch [options]
Options:
  --help  Show help
`;
}

const main = async () => {
	//start parser for argumets
	const args = parseArgs(process.argv.slice(2));	
	if (args === ArgsErrorType.UnknownArgument) {
		console.log(getHelp());
		return;
	}
	if (args.help) {
		console.log(getHelp());
		return;
	}
};
main();
