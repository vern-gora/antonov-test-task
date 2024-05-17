import { configureStore } from '@reduxjs/toolkit'
import { notesReducer } from './notesSlice'

const store = configureStore({
	reducer: {
		note: notesReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
