export const handleClick = () => {
  // Abre o WhatsApp
  const phoneNumber = '22998508764'
  const message = 'Olá, estou vindo da pagina do passei batido e gostaria de fazer um orçamento'
  const whatsapp = window.open(`https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${message}`);

  // Se o WhatsApp não estiver instalado, abre a página da Play Store
  if (!whatsapp) {
    window.open("https://play.google.com/store/apps/details?id=com.whatsapp");
  }
};