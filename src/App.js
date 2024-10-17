import React, {useState} from 'react';
import { AppBar, Toolbar, IconButton, Box, Button, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Modal, TextField, Fab} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { CustomThemeProvider, useTheme } from './ThemeProvider';
import './App.css';

const AppContent = () => {
  const { toggleTheme, theme, scroll } = useTheme();
  const [expandedPanel, setExpandedPanel] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });


  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, email, phone } = formData;
    if (name && email && phone) {
      const whatsappMessage = `https://api.whatsapp.com/send?phone=+5511944758454&text=Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}`;
      window.open(whatsappMessage, '_blank');
    }
  };


  return (
    <div className="App">
      {/* Navbar */}
      <AppBar
        position="fixed"
        className={`custom-navbar ${scroll ? 'scrolled' : ''}`}
        sx={{
          backgroundColor: scroll
            ? theme === 'light' ? '#D98282' : '#8C5656'
            : 'rgba(255, 255, 255, 0.1)', // Tornar o fundo ligeiramente transparente
          color: theme === 'light' ? '#0D0D0D' : '#fff',
          backdropFilter: 'blur(10px)', // Aplica o desfoque no conteúdo atrás
          transition: 'background-color 0.3s ease',
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Links centralizados */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 4 }}>
            {['Sobre', 'Serviços', 'Especializações', 'Contatos'].map((text) => (
              <Button key={text} color="inherit" href={`#${text.toLowerCase()}`} sx={{ fontWeight: 'bold' }}>
                {text}
              </Button>
            ))}
          </Box>

          {/* Toggle de Tema */}
          <IconButton color="inherit" onClick={toggleTheme}>
            <span className="material-icons">{theme === 'light' ? 'dark_mode' : 'wb_sunny'}</span>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Espaçamento para compensar o AppBar */}
      <Box sx={{ height: '64px' }} />
      
      {/* Sessões */}
      <div id="sobre" className="section">
        <Grid container sx={{ alignItems: 'center', marginTop: 2 }}>
          <Grid item xs={12} sm={6}>
            <img
              src="/logo-freitas-machioni.png" // Substitua pelo caminho da sua imagem
              alt="Imagem Descritiva"
              style={{ width: '80%', maxWidth: '550px', borderRadius: '8px', objectFit: 'cover' }} // Ajuste o estilo conforme necessário
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem', // Tamanho do texto
                lineHeight: '1.5', // Redução no espaçamento entre as linhas
                color: theme === 'light' ? '#333' : '#ddd', // Ajuste conforme o tema
                textAlign: 'justify', // Alinhamento do texto justificado
                padding: '0 10px'
              }}
            >
              Sou especialista em Execução Penal, com vasta formação acadêmica em diversas áreas do Direito, incluindo Pós-graduação em Direito de Família e Sucessões. Tenho uma atuação abrangente, trabalhando ao lado de advogados com experiência em diferentes campos do Direito, e dirijo um escritório especializado em serviços Paralegais, prestando suporte junto aos Órgãos Públicos.
              <br /><br />
              Nosso objetivo é sempre garantir a solução rápida e eficaz dos conflitos judiciais e extrajudiciais dos nossos clientes, com o máximo de seriedade e agilidade. Valorizamos o atendimento próximo e estamos sempre disponíveis para consultorias jurídicas, além de manter uma presença ativa nas redes sociais para compartilhar informações e atualizações.
            </Typography>

          </Grid>
        </Grid>
      </div>
      <div id="serviços" className="section">
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '16px'}}>
      <Typography variant="h3" sx={{color: theme === 'light' ? '#8C5656' : '#D98282'}}>Judicial e Extrajudicial</Typography>
      <Accordion
        expanded={expandedPanel === 'panel1'}
        onChange={handleExpansion('panel1')}
        className="custom-accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="custom-accordion-summary"
        >
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>Criminal</Typography>
        </AccordionSummary>
        <AccordionDetails className="custom-accordion-details">
          <Typography variant="body1">
            O serviço de Direito Criminal oferece suporte jurídico para casos que envolvem crimes e contravenções. Isso inclui a defesa de clientes acusados de delitos, assistência em investigações criminais e a busca por soluções que garantam os direitos do acusado, visando a justiça e a proteção legal em situações de criminalidade.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === 'panel2'}
        onChange={handleExpansion('panel2')}
        className="custom-accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="custom-accordion-summary"
        >
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>Família (Pensão Alimentícia, Guarda, Divórcio, União Estável)</Typography>
        </AccordionSummary>
        <AccordionDetails className="custom-accordion-details">
          <Typography variant="body1">
            Na área de Direito de Família, abordamos questões essenciais que impactam a vida pessoal e emocional dos indivíduos. Oferecemos serviços relacionados a Pensão Alimentícia, onde ajudamos a garantir o sustento de filhos ou dependentes; Guarda, para definir a custódia de crianças após separações; Divórcio, facilitando a dissolução de casamentos de forma amigável ou litigiosa; e União Estável, assegurando os direitos e deveres dos parceiros em relacionamentos duradouros.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === 'panel3'}
        onChange={handleExpansion('panel3')}
        className="custom-accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="custom-accordion-summary"
        >
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>Sucessão (Inventário, Doação, Testamento)</Typography>
        </AccordionSummary>
        <AccordionDetails className="custom-accordion-details">
          <Typography variant="body1">
            Os serviços de Sucessão tratam da transmissão de bens e direitos após o falecimento de uma pessoa. Isso inclui o processo de Inventário, que organiza a partilha dos bens; Doação, onde ajudamos na formalização de transferências de bens em vida; e Testamento, auxiliando na elaboração de disposições sobre a herança, garantindo que a vontade do falecido seja respeitada.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === 'panel4'}
        onChange={handleExpansion('panel4')}
        className="custom-accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="custom-accordion-summary"
        >
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>Previdenciário (Aposentadoria, Benefícios, Auxílios, LOAS)</Typography>
        </AccordionSummary>
        <AccordionDetails className="custom-accordion-details">
          <Typography variant="body1">
            Na área Previdenciária, oferecemos orientação sobre questões relacionadas à aposentadoria e benefícios sociais. Isso inclui o auxílio na obtenção de aposentadorias, benefícios por incapacidade, auxílios financeiros e informações sobre o LOAS (Lei Orgânica de Assistência Social), garantindo que nossos clientes tenham acesso aos direitos que lhes são devidos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === 'panel5'}
        onChange={handleExpansion('panel5')}
        className="custom-accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="custom-accordion-summary"
        >
          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>Trabalhista</Typography>
        </AccordionSummary>
        <AccordionDetails className="custom-accordion-details">
          <Typography variant="body1">
            O serviço de Direito Trabalhista abrange a defesa dos direitos dos trabalhadores e empregadores em relação às relações de trabalho. Isso inclui questões como rescisão de contrato, reclamações trabalhistas, direitos trabalhistas e negociações coletivas, assegurando que as leis sejam seguidas e os direitos dos trabalhadores respeitados.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>


      </div>
      <div id="especializações" className="section">
        <Box
          sx={{
            maxWidth: '1000px', // Limite de largura mais ajustado para melhor leitura
            margin: '0 auto',
            padding: '24px', // Aumentei o padding para dar mais respiro ao conteúdo
            textAlign: 'center', // Centralizando o título
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: theme === 'light' ? '#8C5656' : '#D98282',
              marginBottom: '20px', // Espaço entre o título e o texto
            }}
          >
            Especializações
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem', // Texto levemente maior para melhorar a leitura
              lineHeight: '1.7', // Espaçamento entre linhas um pouco maior
              color: theme === 'light' ? '#333' : '#ddd',
              textAlign: 'justify', // Mantém o texto justificado
              padding: '0 16px', // Maior padding lateral para deixar o texto mais respirado
            }}
          >
            Nosso escritório é especializado em diversas áreas do Direito, oferecendo serviços com excelência e comprometimento. No Direito Criminal, atuamos na defesa de clientes em casos de crimes e contravenções, fornecendo suporte jurídico em investigações e processos, sempre com foco na proteção dos direitos dos acusados e na busca pela justiça. Em Direito de Família, lidamos com questões delicadas como Pensão Alimentícia, Guarda, Divórcio e União Estável, buscando garantir os direitos das famílias de maneira justa e humana. Na área de Sucessão, cuidamos de Inventários, Doações e Testamentos, assegurando que os desejos do falecido sejam respeitados e a transmissão de bens ocorra de forma segura e eficiente. Também oferecemos orientação especializada em Direito Previdenciário, auxiliando nossos clientes a obter aposentadorias e benefícios sociais, como LOAS e auxílios financeiros, para garantir que todos tenham acesso aos seus direitos. No campo do Direito Trabalhista, defendemos tanto trabalhadores quanto empregadores, abordando questões como rescisão contratual e direitos trabalhistas, sempre visando o cumprimento das normas e o respeito aos direitos de todas as partes envolvidas.
          </Typography>
        </Box>
      </div>

      <div id="contatos" className="section">
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '16px'}}>
      <Typography variant="h3" sx={{color: theme === 'light' ? '#8C5656' : '#D98282'}}>Contatos</Typography>
          <div id="icons-img">
          <IconButton
            onClick={handleOpen}
            id="whatsapp"
            sx={{ fontWeight: 'bold', flexDirection: 'column', background: 'transparent', color: '#F27E7E', textAlign: 'center', "&:hover":{background: "transparent", color: theme === 'ligth' ? '#8C5656' : '#D98282', transform: 'scale(1.2)', transition: 'transform 0.2s ease-in-out'}}}
            size="large"
          >
          <WhatsAppIcon sx={{fontSize:70}}/>
          <Typography variant='caption' sx={{ fontSize:'15px'}}>WhatsApp</Typography>
          </IconButton>

          <a 
            href="https://www.instagram.com/freitasmachioni_advocacia?igsh=aXg2d2w4ZXplejc2&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <IconButton
              id="instagram"
              sx={{ fontWeight: 'bold', flexDirection: 'column', background: 'transparent', color: '#F27E7E', textAlign: 'center', "&:hover":{background: "transparent", color: theme === 'ligth' ? '#8C5656' : '#D98282', transform: 'scale(1.2)', transition: 'transform 0.2s ease-in-out'}}}
              size="large"
            >
            <InstagramIcon sx={{fontSize:70}}/>
            <Typography variant='caption' sx={{ fontSize:'15px'}}>Instagram</Typography>
            </IconButton>
          </a>

          <a 
            href="https://www.facebook.com/paula.freitass.56?mibextid=ZbWKwL" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <IconButton
              id="facebook"
              sx={{ fontWeight: 'bold', flexDirection: 'column', background: 'transparent', color: '#F27E7E', textAlign: 'center', "&:hover":{background: "transparent", color: theme === 'ligth' ? '#8C5656' : '#D98282', transform: 'scale(1.2)', transition: 'transform 0.2s ease-in-out'}}}
              size="large"
            >
            <FacebookIcon sx={{fontSize:70}}/>
            <Typography variant='caption' sx={{ fontSize:'15px'}}>Facebook</Typography>
            </IconButton>
          </a>

          <a 
            href="https://www.linkedin.com/in/freitas-machioni-advogados-2ab6a2b4/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <IconButton
              id="linkedin"
              sx={{ fontWeight: 'bold', flexDirection: 'column', background: 'transparent', color: '#F27E7E', textAlign: 'center', "&:hover":{background: "transparent", color: theme === 'ligth' ? '#8C5656' : '#D98282', transform: 'scale(1.2)', transition: 'transform 0.2s ease-in-out'}}}
              size="large"
            >
            <LinkedInIcon sx={{fontSize:70}}/>
            <Typography variant='caption' sx={{ fontSize:'15px'}}>LinkedIn</Typography>
            </IconButton>
          </a>
          </div>
      </Box>
      </div>

      {/* WhatsApp Floating Button */}
      <Fab 
        color="success" 
        aria-label="whatsapp" 
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: theme === 'light' ? '#734040' : '#D98282',
          "&:hover": {
            backgroundColor: theme === 'light' ? '#8C5656' : '#F27E7E', transform: 'scale(1.2)', transition: 'transform 0.2s ease-in-out'
          }
        }}>
        <WhatsAppIcon />
      </Fab>

      {/* Modal for WhatsApp Form */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="whatsapp-modal-title"
        aria-describedby="whatsapp-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: theme === 'light' ? 'background.paper' : '#333',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: 2
          }}
        >
          <Typography id="whatsapp-modal-title" variant="h6" component="h2" sx={{ color: theme === 'light' ? '#000' : '#fff' }}>
            Preencha seus dados
          </Typography>
          <TextField
            fullWidth
            name="name"
            label="Nome"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            sx={{ background: theme === 'light' ? '#fff' : '#555' }}
          />
          <TextField
            fullWidth
            name="email"
            label="E-mail"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            sx={{ background: theme === 'light' ? '#fff' : '#555' }}
          />
          <TextField
            fullWidth
            name="phone"
            label="Telefone"
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            sx={{ background: theme === 'light' ? '#fff' : '#555' }}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: 2 }}
          >
            Enviar para o WhatsApp
          </Button>
        </Box>
      </Modal>

    </div>
  );
};

const App = () => (
  <CustomThemeProvider>
    <AppContent />
  </CustomThemeProvider>
);

export default App;
