import Layout from '../../components/Layout/Layout'
import AppBar from '../../components/AppBar/AppBar'
import NoteList from '../../components/NoteList/NoteList'

const MainPage = () => {
	return (
		<div>
			<AppBar />
			<Layout>
				<NoteList />
			</Layout>
		</div>
	)
}

export default MainPage
