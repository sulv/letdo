/**
 * Created by du on 16/7/26.
 */
'use stirct'
import koa from 'koa';
import config from '../config';

const app = new koa();

app.use();

app.listen(config.port, function(){
	console.log('server start at port: ' + config.port);
});
