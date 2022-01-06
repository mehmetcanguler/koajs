const Koa = require('koa');
const app = new Koa();


app.use(ctx => {
    const url = ctx.path
    if (url === '/index'||url==='/') {

        ctx.body = '<h1>INDEX SAYFASINA HOSGELDIN</h1>';
        console.log(ctx.path)
    } else if (url === '/hakkimda') {

        ctx.body = '<h1>HAKKIMDA SAYFASINA HOSGELDIN</h1>';
        console.log(ctx.path)
    } else if (url === '/iletisim') {

        ctx.body = '<h1>ILETISIM SAYFASINA HOSGELDIN</h1>';
        console.log(ctx.path)
    } else{

        ctx.body = '<h1>404 SAYFA BULUNAMADI</h1>';
        console.log(ctx.path)
    }

})
const port=3000;
app.listen(port);
console.log(`${port} nolu port ile dinlenmeye başlanmıştır`)