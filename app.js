
const express = require("express");
const clienteRoutes = require("./routes/cliente");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(clienteRoutes);
const PORT = 3000;

app.get("/",(req, res) => { 
res.send("Granjas El Pollon");
}); 

app.listen(PORT, () => {
console.log(`Servidor ejecutandose en http : ${PORT}`);
}); 