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

export const icon_pm = {
  1: {
    image: require('./../assets/icon_pm_1.png'),
    background: '#f5f4f4',
    textColor: '#f5f4f4',
  },
  2: {
    image: require('./../assets/icon_pm_2.png'),
    background: '#00917c',
    textColor: '#f5f4f4',
  },
  3: {
    image: require('./../assets/icon_pm_3.png'),
    background: '#f5f4f4',
    textColor: '#f5f4f4',
  },
  4: {
    image: require('./../assets/icon_pm_4.png'),
    background: '#f5f4f4',
    textColor: '#f5f4f4',
  },
  5: {
    image: require('./../assets/icon_pm_5.png'),
    background: '#f5f4f4',
    textColor: '#f5f4f4',
  },
  6: {
    image: require('./../assets/icon_pm_6.png'),
    background: '#fff',
    textColor: '#f5f4f4',
  },
  7: {
    image: require('./../assets/title_pm.png'),
    background: '#fff',
    textColor: '#f5f4f4',
  },
};

export const app_ui_color = {
  activityIndicatorColor: '#eb596e',
};

function between(x, min, max) {
  return x >= min && x <= max;
}
function inRange(x, min, max) {
  return (x - min) * (x - max) <= 0;
}

export const GET_ICON_PM = (x) => {
  if (inRange(x, 0, 50)) {
    return icon_pm['1'];
  }
  if (inRange(x, 51, 100)) {
    return icon_pm['2'];
  }
  if (inRange(x, 101, 150)) {
    return icon_pm['3'];
  }
  if (inRange(x, 151, 200)) {
    return icon_pm['4'];
  }
  if (inRange(x, 201, 300)) {
    return icon_pm['5'];
  }
  if (inRange(x, 301, 1000)) {
    return icon_pm['6'];
  }
};