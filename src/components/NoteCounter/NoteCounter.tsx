import React from 'react'
import { useSelector } from 'react-redux'
import { getNotes } from '../../redux/selectors'
import css from './NoteCounter.module.css'
// import { NoteType } from "../../interfaces";

const NoteCounter: React.FC = () => {
	const notes = useSelector(getNotes)

	return (
		<>
			<p className={css.text}>Number of notes: {notes.length}</p>
		</>
	)
}

export default NoteCounter
