import React from 'react'
import { useSelector } from 'react-redux'
import { getNotes } from '../../redux/selectors'
import Note from '../Note/Note'
import css from './NoteList.module.css'

const NoteList: React.FC = () => {
	const notes = useSelector(getNotes)

	return (
		<>
			<ul className={css.list}>
				{notes.map(note => (
					<li className={css.listItem} key={note.id}>
						<Note note={note} />
					</li>
				))}
			</ul>
		</>
	)
}

export default NoteList
