export default function handler(req, res) {
	if (req.method !== "GET") {
		res.status(405).send({
			message: "Only GET requests allowed"
		});
		return
	}
	res.status(200).send({
		test: "abc"
	});
}
