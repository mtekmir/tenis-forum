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
        value: 'MALE',
        label: 'Erkek',
      },
      {
        value: 'FEMALE',
        label: 'Kadın',
      },
    ],
  },
  {
    label: 'Meslek',
    name: 'occupation',
    type: 'text',
  },
  {
    label: 'Imza',
    name: 'signature',
    type: 'textarea',
  },
]
