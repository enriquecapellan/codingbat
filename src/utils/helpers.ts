export function generateFunc(funcName: string, params: any[], args: any[]) {
	const func = `${funcName}(${args
		.map((param, index) => {
			const { type } = params[index];
			return type === "string" ? `"${param}"` : param;
		})
		.join(", ")})`;
	return func;
}

export function generateCode(funcName: string, params: any[]) {
	return `function ${funcName}(${params.map((p) => p.name).join(", ")}) {
  // write your code here
}
`;
}
