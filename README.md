## Desafio para Pessoa Desenvolvedora (React ou Rails)

App url: https://favorite-buildings.web.app/

### Front end
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You'll need to create a .env file as in `.env.sample`

#### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Back end
Firebase functions

#### `cd functions && npm run serve`
Runs the firebase function emulaor.

### Deploy
The app uses firebase for hosting and serverless functions.

#### `firebase deploy --project=<firebase-project>`
Deploys to the firebase specified project.