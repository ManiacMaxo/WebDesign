import 'mysql'
import config from '../secret'

export const db = mysql.createConnection(config)
