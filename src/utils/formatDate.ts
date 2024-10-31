export const formatDate = (fecha: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  };

  const formated = new Date(fecha).toLocaleDateString('es-ES', options);

  // Reemplaza la coma y ajusta el formato final
  return formated.replace(',', ' ').replace(' ', ' ');
};
