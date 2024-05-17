import axios from 'axios'

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const fetchNotes = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/notes`)
		return response.data
	} catch (error) {
		console.error('Error fetching notes:', error)
		throw error
	}
}

export const createNote = async (title: string, description: string) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/notes`, {
			title,
			description,
		})
		return response.data
	} catch (error) {
		console.error('Error creating note:', error)
		throw error
	}
}

export const getNotes = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/notes`)
		return response.data
	} catch (error) {
		console.error('Error fetching notes:', error)
		throw error
	}
}

export const updateNote = async (
	id: string,
	title: string,
	description: string
) => {
	try {
		const response = await axios.put(`${API_BASE_URL}/notes/${id}`, {
			title,
			description,
		})
		return response.data
	} catch (error) {
		console.error('Error updating note:', error)
		throw error
	}
}

export const deleteNote = async (id: string) => {
	try {
		const response = await axios.delete(`${API_BASE_URL}/notes/${id}`)
		return response.data
	} catch (error) {
		console.error('Error deleting note:', error)
		throw error
	}
}
