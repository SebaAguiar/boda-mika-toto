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
  let formatedAdjusted = formated.replace(',', ' ').replace(' ', ' ');

  // Capitalizar la primera letra del día de la semana
  const capitalizeFirstLetter = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

  // Capitalizar la primera letra de la cadena completa
  formatedAdjusted = capitalizeFirstLetter(formatedAdjusted);

  return formatedAdjusted;
};
