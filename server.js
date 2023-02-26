import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";

const app = express();

app.get("/*", (request, response)=>{
    const react_app = renderToString(React.createElement(
        "h1", null, "HELLO FROM SSR"));
    
    return response.send(`
                         <html>
                         <body>
                         <div id="root">${react_app}</div>
                         </body
                         </html>
                         `);
})


const port = 8080;

app.listen(port ,()=>{
    console.log(`server listening on port ${port}`);
})
