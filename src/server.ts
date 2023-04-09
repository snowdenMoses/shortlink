import ShortLinkRoute from './routes/shortlink.route'
import App from './app'


const route = new ShortLinkRoute()
const server = new App()
server.initializeServer(route)
server.listen()