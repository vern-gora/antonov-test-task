import React from 'react'
import NoteCounter from '../NoteCounter/NoteCounter'
import { Link } from 'react-router-dom'
import css from './AppBar.module.css'

const AppBar: React.FC = () => {
	return (
		<header className={css.wrapper}>
			<section className={css.section}>
				<h1 className={css.title}>Notes</h1>
				<NoteCounter />
			</section>
			<Link className={css.link} to='/note'>
				<p className={css.btn}>New Note</p>
			</Link>
		</header>
	)
}

export default AppBar
