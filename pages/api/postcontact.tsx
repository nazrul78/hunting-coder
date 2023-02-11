import * as fs from 'node:fs';
export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        // Process a POST request
        console.log(req.body)
        let data = await fs.promises.readdir('contactdata');

        console.log(data);
        fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body))
        res.status(200).json()
    } else {
        res.status(200).json(['Nazrul Nakib'])
        // name, email, desc, phone
    }
}