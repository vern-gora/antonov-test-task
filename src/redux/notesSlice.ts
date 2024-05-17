import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { NoteType } from '../interfaces'

const notesInitialState: NoteType[] = [
	{
		id: '0',
		title: 'water',
		description: 'drink a glass of water',
	},
	{
		id: '1',
		title: 'teeth',
		description: 'brush your teeth',
	},
	{
		id: '2',
		title: 'bed',
		description: 'make a bed',
	},
	{
		id: '3',
		title: 'exercises',
		description: 'do exercises',
	},
	{
		id: '4',
		title: 'store',
		description: 'go to the store',
	},
]

const notesSlice = createSlice({
	name: 'notes',
	initialState: notesInitialState,
	reducers: {
		addNote: {
			reducer(state, action: PayloadAction<NoteType>) {
				state.push(action.payload)
			},
			prepare(title: string, description: string) {
				return {
					payload: {
						id: nanoid(),
						title,
						description,
						completed: false,
					} as NoteType,
				}
			},
		},
		deleteNote(state, action: PayloadAction<string>) {
			const index = state.findIndex(note => note.id === action.payload)
			state.splice(index, 1)
		},
		updateNote: (state, action: PayloadAction<NoteType>) => {
			const { id, title, description } = action.payload
			const existingNote = state.find(note => note.id === id)
			if (existingNote) {
				existingNote.title = title
				existingNote.description = description
			}
		},
	},
})

export const { addNote, deleteNote, updateNote } = notesSlice.actions
export const notesReducer = notesSlice.reducer
