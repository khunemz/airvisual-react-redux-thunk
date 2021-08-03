export const units = (n) => {
  switch (n) {
    case 'p2':
      return 'pm2.5';
    case 'p1':
      return 'pm10';
    case 'o3':
      return 'Ozone O3';
    case 'n2':
      return 'NO2'; //Nitrogen dioxide NO2
    case 's2':
      return 'SO2'; //Sulfur dioxide SO2
    case 'co':
      return 'CO '; //Carbon monoxide CO
    default:
      return '';
  }
};
