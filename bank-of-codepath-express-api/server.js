const app = require("./app")

const PORT = process.env.port || 3002

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
