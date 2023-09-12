export function test(testName: string, testFn: () => any) {
	try {
		const passed = testFn();
		if (passed) console.log(`✅ ${testName}`);
		else console.error(`❌ ${testName}`);
	} catch (err: any) {
		console.error(`❌ ${testName} has failed: ${err.message}`);
	}
}

export function expect(actual: any) {
	return { toBe: (expected: any) => actual === expected };
}

// export class TestRunner {
// 	constructor() {
// 		const select = document.getElementById("exercise-select");
// 		select.addEventListener("change", (event) => {
// 			this.exercise = exercises.find((item) => item.id === event.target.value);
// 			this.renderExercise();
// 		});

// 		this.exercise = exercises[0];
// 		this.renderExercise();

// 		exercises.forEach((item) => {
// 			const option = document.createElement("option");
// 			option.value = item.id;
// 			option.text = item.name;
// 			select.appendChild(option);
// 		});
// 	}

// 	runTests() {
// 		const errorElement = document.querySelector("#error");
// 		errorElement.innerHTML = "";
// 		const testsTable = document.querySelector("#tests-table");
// 		testsTable.lastChild.remove();
// 		testsTable.classList.remove("hidden");
// 		const tBody = document.createElement("tbody");
// 		const { funcName, params, tests } = this.exercise;

// 		const userCode = editor.getValue();
// 		try {
// 			let func;
// 			eval(`func = ${userCode}`);

// 			tests.forEach((test) => {
// 				const testRow = document.createElement("tr");
// 				const { params: input, expected } = test;

// 				const result = func(...input);
// 				const passed = result == expected;
// 				testRow.innerHTML = `
//           <td><code>${generateFunc(funcName, params, input)}</code></td>
//           <td><code>${expected}</code></td>
//           <td>${result}</td>
//           <td class='icon'>${passed ? "✅" : "❌"}</td>
//         `;
// 				tBody.appendChild(testRow);
// 			});
// 			testsTable.appendChild(tBody);
// 		} catch (err) {
// 			testsTable.classList.add("hidden");
// 			errorElement.innerHTML = err;
// 		}
// 	}

// }
