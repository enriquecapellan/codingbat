interface Exercise {
	id: string;
	value: string;
	name: string;
	description: string;
	funcName: string;
	params: Param[];
	examples: Example[];
	tests: Test[];
}

interface Param {
	name: string;
	type: string;
}

interface Example {
	input: any[];
	output: any;
}

interface Test {
	params: any[];
	expected: any;
}


type Module = Database['public']['Tables']['modules']['Row']
