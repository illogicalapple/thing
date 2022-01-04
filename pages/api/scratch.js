export default function handler(req, res) {
	const {
		query: { name },
		method,
	} = req
	if (method !== "GET") {
		res.status(405).send({
			message: "Only GET requests allowed"
		});
		return;
	}
	res.setHeader('Content-Type', 'text/html');
	res.status(200).send(`Hello ${name}.`);
}
