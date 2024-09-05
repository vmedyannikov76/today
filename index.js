
import express from 'express';
import {engine} from 'express-handlebars';
import path from 'path';
import {fileURLToPath} from 'url';
import {home, about, notFound, serverError, aboutId,api, staf} from './routes/rout.js'

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

//экземпляр экспреса
const app = express();
const PORT = process.env.PORT || 3300;

//обработчик хандлебарс
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');




//обработка статических файлов
app.use(express.static(__dirname + '/public/static'));



//маршруты
app.get('/',home)
app.get('/api',api)
app.get('/about', about)
app.get('/about/:id', aboutId)
app.get('/staff/:city/:name', staf)

//ошибка 404 нет такой страницы
app.use(notFound)
//ошибка 500 сервер не отвечает
app.use(serverError)


app.listen(PORT, ()=>{
    console.log(`Сервер запущен по адресу http://localhost:${PORT} 
    для выхода нажать Ctrl+C`)
})