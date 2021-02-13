import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
	const [string, setString] = useState('');
	const [strArr, setStrArr] = useState([]);
	useEffect(() => {
		let len = string.length;
		let count = 0;

		let res = string[0];
		for (var i = 0; i < len; i++) {
			var cur_count = 1;
			for (var j = i + 1; j < len; j++) {
				if (string[i] != string[j]) {
					break;
				}
				cur_count++;
			}

			if (cur_count > count) {
				count = cur_count;
				res = string[i];
			}
		}
		let arr = new Array(count).fill(res);
		console.log('useEffect -> arr', arr);
		setStrArr(arr.toString());
	}, [string]);

	return (
		<div style={{ marginLeft: '5rem', marginTop: '5rem' }}>
			<input
				value={string}
				onChange={(e) => {
					setString(e.target.value);
				}}
				type='text'
			/>
			<div>
				<h2>
					Longest Character in {string} is {strArr}
				</h2>
			</div>
		</div>
	);
}

export default App;
