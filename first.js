const fs = require("fs");
const jsonfile = fs.readFile("test.json",(err,data)=>
{
    if(err)
    {
        console.error(err);
        return;
    }
    const output = JSON.stringify(data)
    console.log(output)
    //console.log(JSON.stringify(jsonfile));  
})

// filePath = "test.c";
// fs.readFile(filePath,(err,data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     const text = data.toString();
//     const refer = text.includes('int');
//     if(refer)
//     {
//         const test = text.split(" ")
//         if(test[2].startsWith())
//         {
//             console.log("done");
//         }
//     }
// })
