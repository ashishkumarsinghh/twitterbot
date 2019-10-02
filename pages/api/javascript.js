export default (req, res) => {
	const js = 'Hello from javascript page.';
	res.json({ js });
};
