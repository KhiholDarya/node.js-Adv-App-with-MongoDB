const users = [
	{ name: 'Jan Kowalski', password: 'password1' },
	{ name: 'Adam Wiśniewski', password: 'password2' },
	{ name: 'Ewa Zielińska', password: 'password3' },
 ];
 
 module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) return res.status(401).send('Access denied. No credentials sent.');
 
	const [name, password] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
	const user = users.find(u => u.name === name && u.password === password);
	if (!user) return res.status(403).send('Access denied. Invalid credentials.');
 
	req.user = user;
	next();
 };