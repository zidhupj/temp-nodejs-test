const {readFile, writeFile} = require('fs');

readFile('../content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;
    readFile('../content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        console.log(first,second);
        writeFile(
            '../content/result.txt',
            `Here is the result : \n${first} ${second}\n`,
            {flag: 'a'},
            (err)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(`File successfully written`);
            }
        );
    });
});
