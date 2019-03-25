const imageIds = [
  'T0B6Z0ZL1.png',
  'T0B6Z0ZL2.png',
  'T0B6Z0ZL3.png',
  'T0B6Z0ZL4.png',
  'T0B6Z0ZL5.png',
  'T0B6Z0ZL6.png',
  'TFB27943F.png',
];

export const generateProfileImage = () =>
  imageIds[Math.floor(Math.random() * imageIds.length)];
