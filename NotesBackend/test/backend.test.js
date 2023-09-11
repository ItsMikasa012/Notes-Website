import axios from 'axios';
import { describe, test } from '@jest/globals';
import "../index.js"
// import '../router/user.js';
// import '../router/notes.js';

const baseURL = 'http://localhost:4000/api/v1';

let userId;
let noteId;

//For testing user backend api
describe('Test userRouter api', () => {
	const userRouterUrl = baseURL + '/user';
	const newUser = {
		username: 'deva',
		email: 'deva@gmail.com',
		password: 'deva1234',
	};

	test('POST | Insert a user ', async () => {
		const response = await axios.post(userRouterUrl + '/addUser', newUser);

		userId = response.data.insertedId;
		expect(response.status).toBe(200);
		//response from mongodb
		expect(response.data.acknowledged).toBe(true);
	});

	test('GET | Find by userId', async () => {
		const response = await axios.get(userRouterUrl + '/userId/' + userId);

		expect(response.status).toBe(200);
		expect(response.data.username).toBe(newUser.username);
		expect(response.data.email).toBe(newUser.email);
		expect(response.data.password).toBe(newUser.password);
	});

	test('GET | Find all users', async () => {
		const response = await axios.get(userRouterUrl);

		expect(response.status).toBe(200);
		expect(response.data.length).toBeGreaterThan(0);
	});

	test('PUT | Update a user', async () => {
		const response = await axios.put(userRouterUrl + '/editUser/' + userId, {
			username: 'devanand',
		});

		expect(response.status).toBe(200);
		//response from mongodb
		expect(response.data.modifiedCount).toBe(1);
	});

});

//For testing notes backend api
describe('Test notesRouter api', () => {
	const noteRouterUrl = baseURL + '/note';

	const userID = "60b9b0b9e6b0c2b4b8b0b0b0";

	const newnote = {
		title : 'test',
		content : 'test 123',
		user : userID, 
		updated : new Date().toUTCString(),
	};

	test('POST | Insert a note ', async () => {
		const response = await axios.post(noteRouterUrl + '/addnote', newnote);

	    noteId = response.data.insertedId;
		expect(response.status).toBe(200);
		//response from mongodb
		expect(response.data.acknowledged).toBe(true);
	});

	test('GET | Find by noteId', async () => {
		const response = await axios.get(noteRouterUrl + '/' + noteId);

		expect(response.status).toBe(200);
		expect(response.data.title).toBe(newnote.title);
		expect(response.data.content).toBe(newnote.content);
		
	});

	test('GET | Find all notes by userID', async () => {
		const response = await axios.get(noteRouterUrl+'/userId/'+userID);

		expect(response.status).toBe(200);
		expect(response.data.length).toBeGreaterThan(0);
	});

	test('PUT | Update a note', async () => {
		const response = await axios.put(noteRouterUrl + '/editNote/' + noteId, {
			title: 'test123',
		});

		expect(response.status).toBe(200);
		//response from mongodb
		expect(response.data.modifiedCount).toBe(1);
	});

});


describe('Delete notes and user', () => {
	const userRouterUrl = baseURL + '/user';
	const noteRouterUrl = baseURL + '/note';

	test('DELETE | Delete a user', async () => {
		const response = await axios.delete(userRouterUrl + '/deleteUser/' + userId);

		expect(response.status).toBe(200);
		//response from mongodb
		expect(response.data.deletedCount).toBe(1);
	});

	test('DELETE | Delete a note', async () => {
		const response = await axios.delete(noteRouterUrl + '/deleteNote/' + noteId);

		expect(response.status).toBe(200);
		//response from mongodb
		expect(response.data.deletedCount).toBe(1);
	});

 })