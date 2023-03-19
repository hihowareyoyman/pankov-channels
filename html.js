import express from 'express'
import path from 'path';
import { value } from './labserv.js';

export const boostrapServerHtml = async (port) => {
    const app = express()
    const __dirname = path.resolve();

    app.on('error', (error)=>{
        console.log("error:",error)
        app.close()

        throw new Error('internal server error')
    })

    app.get('/', (req,res) => {
        res.sendFile('home.html', {root: __dirname+'/public'})
    })

   app.set ('views', './views')
   app.set ('view engine', 'ejs')
    app.get('/kanal1', (req,res) => {
    res.render('kanal1',{ text :  value[0].toString() })
    console.log(`Канал 1: ${value[0].toString()}`)
    })

    app.get('/kanal2', (req,res) => {
        res.render('kanal2',{ text :  value[1].toString() })
        console.log(`Канал 2: ${value[1].toString()}`)
    })

    app.listen(port, () => {
        console.log(`browser client listening on ${port}`);
    })

}
