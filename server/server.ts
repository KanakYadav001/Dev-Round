import { dataBase } from './src/db/db';
import 'dotenv/config' ;



import app from './src/app'

const PORT  = process.env.PORT || 8287


dataBase.mongoDb().then(()=>{
    
app.listen(PORT , () => {
    console.log(`Server Run On ${PORT} Port`)
})

})






