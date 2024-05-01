//Arquivo responsável por livar o servidor local

import app from "./index.js"

const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`Server runing on http://localhost:${PORT}`)
})