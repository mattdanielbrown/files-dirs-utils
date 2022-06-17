'use strict';

const fs = require('fs');

export default function dirContents(dir) {
	let directoryContentsList;
	directoryContentsList = [];
	//Synchronously:
	fs.readdirSync(dir).forEach(file => {
		directoryContentsList.push(file);
	});
	return directoryContentsList;
}

export function logDirContents(dir) {
	fs.readdir(dir, (err, files) => {
		if (err) throw err;
		files.forEach(file => {
			console.log(file);
		});
	});
}

export function dirFiles(dir) {
	let directoryFilesList;
	directoryFilesList = [];
	//Synchronously:
	fs.readdirSync(dir).forEach(file => {
		directoryFilesList.push(file);
	});
	return directoryFilesList;
}

export function logDirFiles(dir) {
	//Synchronously:
	fs.readdirSync(dir).forEach(file => {
		console.log(file);
	});
}

