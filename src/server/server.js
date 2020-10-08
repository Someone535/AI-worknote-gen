import express from 'express'
import path from 'path'

const app = express(),
			DIST_DIR = __dirname,
			HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('*', (req,res) => res.sendFile(HTML_FILE) );

const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
	console.log('Prod App listening to ${PORT}....');
	console.log('Press Ctrl+C to quit.');
} );
