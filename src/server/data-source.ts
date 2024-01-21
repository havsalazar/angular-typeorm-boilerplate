import {DataSource} from 'typeorm'
import * as path from "path"
import { User } from './entity/user.entity'

const root: string = path.resolve(__dirname, "..")

const AppDataSource = new DataSource({
    type:'sqlite',
    entities :[User],    
    database: `./test.db`,
})


AppDataSource
.initialize()
.then(() => {
    console.log(`Data Source has been initialized path ${root}`);
    AppDataSource.synchronize().then(()=>console.log("db sync"));
})
.catch((err) => {
    console.error(`Data Source initialization error`, err);
})

export default AppDataSource;