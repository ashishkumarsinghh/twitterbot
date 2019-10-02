export default (req, res) => {
	const keys = process.env.TAK + ' ' + process.env.TAKS + ' ' + process.env.TATS + ' ' + process.env.TATK;
	res.send(keys);
};
