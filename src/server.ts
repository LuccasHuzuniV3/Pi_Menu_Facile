import { app } from './index';
import 'dotenv/config';

const PORT:Number = Number(process.env.PORT) || 3333; //setando a porta

app.listen(PORT,(): void => {
    console.log(`App ta rodando na porta ${PORT}`);
})

