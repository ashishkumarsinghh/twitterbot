import React, { useEffect, useState } from 'react';

const Home = () => {
	const [date, setDate] = useState(null);

	useEffect(() => {
		async function getDate() {
			const res = await fetch('/api/date');
			const newDate = await res.json();
			setDate(newDate);
		}

		getDate();
	}, [date]);
	const [js, setJs] = useState(null);

	useEffect(() => {
		const getJs = async () => {
			const res = await fetch('/api/javascript');
			const newJs = await res.json();
			setJs(newJs);
		};
		getJs();
	}, [js]);
	return (
		<div>
			<Head title="Home" />

			<div className="hero">
				<h1 className="title">Welcome to Next!</h1>
				<p className="description">
					To get started, edit the <code>pages/index.js</code> or <code>pages/api/date.js</code> files, then
					save to reload.
				</p>

				<p className="row date">
					The date is:&nbsp;{' '}
					{date ? (
						<span>
							<b>{date.date}</b>
						</span>
					) : (
						<span className="loading"></span>
					)}
				</p>
				<p className="row date">
					The js is:&nbsp;{' '}
					{js ? (
						<span>
							<b>{js.js}</b>
						</span>
					) : (
						<span className="loading"></span>
					)}
				</p>
			</div>
		</div>
	);
};

export default Home;
