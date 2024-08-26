const express = require('express');
const ytdl = require('ytdl-core');

const app = express();

app.get('/download', (req, res) => {
    const videoUrl = req.query.url;
    if (ytdl.validateURL(videoUrl)) {
        res.header('Content-Disposition', 'attachment; filename="video.mp4"');
        ytdl(videoUrl, { format: 'mp4' }).pipe(res);
    } else {
        res.status(400).send('URL inválida');
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
