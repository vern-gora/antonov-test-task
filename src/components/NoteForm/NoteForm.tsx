import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNote, updateNote } from '../../redux/notesSlice'
import { getNotes } from '../../redux/selectors'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import css from './NoteForm.module.css'

interface NoteFormProps {
	noteId?: string
}

const NoteForm: React.FC<NoteFormProps> = ({ noteId }) => {
	const [title, setTitle] = useState<string>('')
	const [description, setDescription] = useState<string>('')

	const dispatch = useDispatch()

	const navigate = useNavigate()

	const notes = useSelector(getNotes)

	useEffect(() => {
		if (noteId) {
			const note = notes.find(note => note.id === noteId)
			if (note) {
				setTitle(note.title)
				setDescription(note.description || '')
			}
		}
	}, [noteId, notes])

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (noteId) {
			dispatch(updateNote({ id: noteId, title, description }))
		} else {
			dispatch(addNote(title, description))
		}
		setTitle('')
		setDescription('')
		navigate('/')
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		if (event.target.name === 'title') {
			setTitle(event.target.value)
		} else {
			setDescription(event.target.value)
		}
	}

	return (
		<>
			<h2>{noteId ? 'Edit note' : 'Add new note'}</h2>

			<Box
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
				className={css.form}
				onSubmit={handleSubmit}
			>
				<TextField
					id='outlined-basic'
					label='Title'
					variant='outlined'
					required
					className={css.field}
					type='text'
					name='title'
					value={title}
					onChange={handleChange}
					placeholder='Title...'
				/>
				<TextField
					id='outlined-basic'
					label='Description'
					variant='outlined'
					required
					className={css.field}
					type='text'
					name='description'
					value={description}
					onChange={handleChange}
					placeholder='Description...'
				/>
				<button type='submit' className={css.btn}>
					{noteId ? 'Update note' : 'Add note'}
				</button>
			</Box>

			{/* <form className={css.form} onSubmit={handleSubmit}>
				<input
					required
					className={css.field}
					type='text'
					name='title'
					value={title}
					onChange={handleChange}
					placeholder='Title...'
					maxLength={20}
				/>
				<input
					required
					className={css.field}
					type='text'
					name='description'
					value={description}
					onChange={handleChange}
					placeholder='Description...'
					maxLength={50}
				/>
				<button type='submit' className={css.btn}>
					{noteId ? 'Update note' : 'Add note'}
				</button>
			</form> */}
		</>
	)
}

export default NoteForm
