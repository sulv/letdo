/**
 * Created by du on 16/7/28.
 */
import koa from 'koa';
import config from '../config';

const app = new koa();

app.listen(config.port, function(){
	console.log('server listen at port :' + config.port)
});