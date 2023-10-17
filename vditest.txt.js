// Invocamos o leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();

// entao habilitamos o usuario a acessar o serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certin
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo para fazer a nossa magica =)
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil Base Projeto

client.on('message', async msg => {

    if (msg.body.match(/(informação|eu quero|como funciona|funciona|interessado|informações|mais informações|Imagens|videos|audios)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(10000); //delay de 10 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3 segundos
        await client.sendMessage(msg.from,'Oiee, tudo bem?'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //delay de 5 segundos
        await client.sendMessage(msg.from, ' Meu nome é Rodrigo Moura, sou um cara de origem humilde, com valores inegociáveis. Há algum tempo trabalho como parceiro de negócios do Bruno Pereira, e já ajudei dezenas de pessoas a mudar de vida com importação!'); 
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //delay de 5 segundos
        await client.sendMessage(msg.from, ' Mas olha, antes de qualquer coisa, VOCE PRECISA SALVAR MEU CONTATO. Se você não fizer, não vai receber minha mensagem quando te responder (é sério isso!). Então já salva aí.');
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //delay de 5 segundos
        await client.sendMessage(msg.from, 'Enfim, me conta, como você chama? Para poder salvar seu contato e você poder acompanhar meus stories, pois sempre estou colocando novidades lá! ');   }
    
    // bloco 2 será ativado após a resposta do lead 
    if([/(A|'a'|E|e|I|i|O|o|U|u)/].includes(msg.body)){
    const chat = await msg.getChat();
    console.log('Resposta correspondente recebida:', msg.body);
    await delay(10000); //delay de 10 segundos
    await chat.sendStateRecording();
    await delay(20000); // Por exemplo, 10 segundos
    await chat.clearState();
    const formal1 = MessageMedia.fromFilePath('./01_intro_vdi.ogg'); // Arquivo de audio em ogg gravado no whatsapp, ou .opus convertido

    await client.sendMessage(msg.from, formal1, {sendAudioAsVoice: true}); // enviando o audio1
           
    



    }

