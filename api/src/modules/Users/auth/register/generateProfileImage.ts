const imageIds = ['TFB27943F.png'];

export const generateProfileImage = () =>
  imageIds[Math.floor(Math.random() * imageIds.length)];
