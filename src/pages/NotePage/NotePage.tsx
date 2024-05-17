// import { MdArrowBack } from 'react-icons/md'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Layout from '../../components/Layout/Layout'
import NoteForm from '../../components/NoteForm/NoteForm'
import { Link, useParams } from 'react-router-dom'
import css from '../NotePage/NotePage.module.css'

const NotePage = () => {
	const { id } = useParams<{ id: string }>()

	return (
		<>
			<Layout>
				<Link className={css.link} to={'/'}>
					<button className={css.btn}>
						<ArrowBackIcon />
						<p>Back</p>
					</button>
				</Link>
				<NoteForm noteId={id} />
			</Layout>
		</>
	)
}

export default NotePage
