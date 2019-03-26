export const PROFILE_FIELDS = [
  {
    label: 'Kullanıcı Adı',
    name: 'username',
    type: 'text',
  },
  {
    label: 'Konum',
    name: 'location',
    type: 'text',
  },
  {
    label: 'Cinsiyet',
    name: 'gender',
    type: 'select',
    options: [
      {
        value: 'NotSelected',
        label: 'Seçilmedi',
      },
      {
        value: 'Male',
        label: 'Erkek',
      },
      {
        value: 'Female',
        label: 'Kadın',
      },
    ],
  },
  {
    label: 'Meslek',
    name: 'occupation',
    type: 'text',
  },
];
