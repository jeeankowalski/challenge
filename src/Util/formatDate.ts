// Função para formatar datas no formato DD/MM/AAAA
// Criado assim para não precisar ativar o Intl no android

const formatDate = (date: Date) => {
  try {
    const newDate = new Date(date);

    const dd = newDate.getDate().toString().padStart(2,'0');
    const mm = (newDate.getMonth()+1).toString().padStart(2,'0');
    const yyyy = newDate.getFullYear().toString();
  
    return `${dd}/${mm}/${yyyy}`;  
  } catch (error) {
    return '';
  }
}

export default formatDate;