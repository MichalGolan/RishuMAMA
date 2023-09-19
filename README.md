# RishuMAMA
Michal Golan  | ID: 318457116 | Phone: 0545680805
Michal Aronov | ID: 316032317 | Phone: 0526678536

the app is also currently in the air and running on 
`https://creepy-shape-production.up.railway.app/`
until Friday, 22/09/2023
(as of 19/09/2023)

## Installation Instructions
for local version:
1. you should have postgres installed on your computer.
2. create `Rishumama` database in your local postgres.
3. add file `.env` in the following path `\RishuMAMA\backend\`
4. add the next line: `DATABASE_URL="postgresql://postgres:<postgres-passwrord>@localhost:5432/Rishumama?schema=public"`
* put your postgres password in the <postgres-passwrord> placeholder above *
5. run `npm install` in both `\backend` & `\client`.
5. run the following code in the terminal inside the `\backend` folder:
`prisma migrate dev`
6. then run the following 2 commands:
- `npx ts-node .\seeders\initial-data.ts`
- `npx ts-node .\seeders\seed-lectures.ts`
to populate your local database.
7. run the following code in the terminal inside the `\backend` folder:
`npm run dev`
8. run the following code in the terminal inside the `\client` folder:
`npm run dev`
9. the app should be up and running in http://localhost:5173/

## 3rd Party Libraries
- MUI
- fullcalendar
