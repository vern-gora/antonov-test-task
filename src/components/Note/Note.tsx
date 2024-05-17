import { MdClose, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { NoteType } from '../../interfaces'
import { deleteNote } from '../../redux/notesSlice'
import css from './Note.module.css'
import { Link } from 'react-router-dom'

const Note = ({ note }: { note: NoteType }) => {
	const dispatch = useDispatch()

	const handleDelete = () => dispatch(deleteNote(note.id))

	return (
		<div className={css.wrapper}>
			<button className={css.btn}>
				<Link className={css.edit} to={`/note/${note.id}`}>
					<MdEdit size={24} />
				</Link>
			</button>
			<div className={css.text}>
				<p className={css.title}>{note.title}</p>
				<p className={css.description}>{note.description}</p>
			</div>
			<button className={css.btn} onClick={handleDelete}>
				<MdClose size={24} />
			</button>
		</div>
	)
}

export default Note
