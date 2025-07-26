const config = {
  api: {
    accessTokenKey: 'accessToken'
  },
  app: {
    confirmTime: 60000
  },
  language: {
    key: 'language',
    initial: 'uz',
    list: ['uz', 'ru', 'en']
  },
  list: {
    perPage: 30
  },
  services: {
    user: 'api/user/v1',
    file: 'api/file/v1'
  } as const,
  support: {
    phone: '+99870000000',
    innerNumber: '1344'
  }
};

type Keys = keyof typeof config.services;
export type ServiceType = (typeof config.services)[Keys];

export default config;
