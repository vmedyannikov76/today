import { error } from 'console';
import express from 'express';
import {engine} from 'express-handlebars';

//экземпляр экспреса
const app = express();
const PORT = process.env.PORT || 3300;

//обработчик хандлебарс
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//маршруты
app.get('/', (req,res)=>{
    res.render('home')
})


//ошибка 404 нет такой страницы
app.use((req,res)=>{
    res.status = '404';
    res.render('404', {layout:'notepage'})//индивидуальный шаблон
})
//ошибка 500 сервер не отвечает
app.use((error,req,res,next)=>{
    console.error(error.message);
    res.status = '500';
    res.render('500', {layout:'notepage'})
    
})


app.listen(PORT, ()=>{
    console.log(`Сервер запущен по адресу http://localhost:${PORT} 
    для выхода нажать Ctrl+C`)
})