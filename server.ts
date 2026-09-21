import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware para parsing de JSON e formulários
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API 1: Healthcheck do servidor Node.js
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({
      status: 'ok',
      service: 'Renovasolo Climatech Node.js Server',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
    });
  });

  // API 2: Informações institucionais e canais oficiais
  app.get('/api/info', (req: Request, res: Response) => {
    res.json({
      name: 'Renovasolo Climatech',
      tagline: 'Conectamos ciência, tecnologia e agricultura regenerativa para recuperar solos e descarbonizar cadeias globais.',
      location: 'Carmo do Rio Claro — MG, Brasil',
      whatsapp: '+55 35 99837-6012',
      email: 'contato@renovasoloclimatech.com.br',
      linkedin: 'https://www.linkedin.com/company/renovasolo-climatech/',
      instagram: 'https://www.instagram.com/renovasolo.climatech/',
    });
  });

  // API 3: Recebimento de formulário de contato / parcerias
  app.post('/api/contact', (req: Request, res: Response) => {
    try {
      const { name, email, phone, organizationType, subject, message, hectares, consent } = req.body;

      if (!name || !email || !phone) {
        return res.status(400).json({
          error: 'Campos obrigatórios ausentes: nome, e-mail e telefone são necessários.',
        });
      }

      console.log('----------------------------------------------------');
      console.log('🌱 [Renovasolo Node.js] Novo contato recebido:');
      console.log(`Nome: ${name}`);
      console.log(`E-mail: ${email}`);
      console.log(`Telefone/WhatsApp: ${phone}`);
      console.log(`Organização: ${organizationType || 'Não especificado'}`);
      console.log(`Assunto: ${subject || 'Geral'}`);
      console.log(`Área estimada (ha): ${hectares || 'Não informado'}`);
      console.log(`Consentimento LGPD: ${consent ? 'Sim' : 'Não'}`);
      console.log(`Mensagem: ${message || '(vazio)'}`);
      console.log(`Data/Hora: ${new Date().toLocaleString('pt-BR')}`);
      console.log('----------------------------------------------------');

      return res.status(200).json({
        success: true,
        message: 'Recebemos seu contato com sucesso! A equipe técnica da Renovasolo Climatech entrará em contato em breve.',
        data: {
          name,
          email,
          receivedAt: new Date().toISOString(),
        },
      });
    } catch (err) {
      console.error('Erro ao processar contato:', err);
      return res.status(500).json({
        error: 'Erro interno no servidor ao registrar a mensagem.',
      });
    }
  });

  // Vite middleware em desenvolvimento / Arquivos estáticos em produção
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌱 [Renovasolo Node.js] Servidor rodando em http://0.0.0.0:${PORT}`);
  });
}

startServer();
