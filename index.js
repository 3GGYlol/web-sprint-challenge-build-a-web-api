const express = require('express')


const app = express()

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
    console.log(`Server running on port ${port}`)
})
