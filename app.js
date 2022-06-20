const app = require("express")();
const https = require('https');
app.post('/location_api',(req,res) => {
    const myloc = req.body.myloc;
    const delloc = req.body.delloc;
    url = "https://maps.googleapis.com/maps/api/directions/json?origin="+myloc+"&destination="+delloc+"&key=AIzaSyBbdnhP9xIr4fsRQjYHIUWw-XwgzRVvbCo";
    https.get(url,(response)=>{
        response.on("data",(data) =>{
            const details = JSON.parse(data);
            res.send(details);
        })
    })
})

app.listen("3000",()=>console.log("working good"));