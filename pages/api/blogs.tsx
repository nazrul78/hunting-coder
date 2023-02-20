// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'node:fs';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {


    let data = await fs.promises.readdir("blogdata");
    data = data.slice(0, parseInt(req.query.count));

    let myFile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {

        const element = data[index];



        myFile = await fs.promises.readFile(('blogdata/' + element), 'utf-8')

        allBlogs.push(JSON.parse(myFile));

    }
    res.status(200).json(allBlogs);



}
