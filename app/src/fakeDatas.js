// Simulating data the app will receive from /customers route of api
const apiDatas = [
  {
    _id: '59046e4286f0484fbd69e32d',
    date_added: '2017-04-29T10:43:14.738Z',
    __v: 0,
    orders: [],
    total_amount: 0,
    total_orders: 0,
    profile: {
      phone: '0249060472',
      post_code: '35400',
      first_name: 'Artus',
      address: '99 rue des Dunes',
      city: 'Saint Malo',
      last_name: 'Brisebois',
      age: 36,
      color: '#fff',
    },
  },
  {
    _id: '59046ee186f0484fbd69e32e',
    date_added: '2017-04-29T10:45:53.000Z',
    __v: 0,
    orders: [],
    total_amount: 0,
    total_orders: 0,
    profile: {
      phone: '0440467973',
      post_code: '34200',
      first_name: 'Curtis',
      address: '10, avenue de Bouvines',
      city: 'Sète',
      last_name: 'Dubé',
      age: 70,
      color: '#fff',
    },
  },
  {
    _id: '59046f3986f0484fbd69e32f',
    date_added: '2017-04-29T10:47:21.117Z',
    __v: 0,
    orders: [],
    total_amount: 0,
    total_orders: 0,
    profile: {
      phone: '0169537911',
      post_code: '94130',
      first_name: 'Orson',
      address: '4, boulevard de Prague',
      city: 'Nogent-sur-Marne',
      last_name: 'Boucher',
      age: 34,
      color: '#fff',
    },
  },
  {
    _id: '59046fb986f0484fbd69e330',
    date_added: '2017-04-29T10:49:29.731Z',
    __v: 0,
    orders: [],
    total_amount: 0,
    total_orders: 0,
    profile: {
      phone: '0129640107',
      post_code: '95120',
      first_name: 'Ancelina',
      address: '99, Rue du Palais',
      city: 'Ermont',
      last_name: 'Gamache',
      age: 53,
      color: '#fff',
    },
  },
  {
    _id: '59046ff686f0484fbd69e331',
    date_added: '2017-04-29T10:50:30.506Z',
    __v: 0,
    orders: [],
    total_amount: 0,
    total_orders: 0,
    profile: {
      phone: '0460588943',
      post_code: '69004',
      first_name: 'Tanguy',
      address: '96, rue de la République',
      city: 'Lyon',
      last_name: 'Fortier',
      age: 80,
      color: '#fff',
    },
  },
  {
    _id: '5904705086f0484fbd69e332',
    date_added: '2017-04-29T10:52:00.164Z',
    __v: 0,
    orders: [],
    total_amount: 0,
    total_orders: 0,
    profile: {
      phone: '0139724839',
      post_code: '78170',
      first_name: 'Tabor',
      address: '92, rue des Soeurs',
      city: 'LA CELLE-SAINT-CLOUD',
      last_name: 'Narcisse',
      age: 82,
      color: '#fff',
    },
  },
  {
    _id: '5904708786f0484fbd69e333',
    date_added: '2017-04-29T10:52:55.785Z',
    __v: 0,
    orders: [],
    total_amount: 0,
    total_orders: 0,
    profile: {
      phone: '0153599873',
      post_code: '95200',
      first_name: 'Josette',
      address: '79, rue des six frères Ruellan',
      city: 'SARCELLES',
      last_name: 'Boutot',
      age: 52,
      color: '#fff',
    },
  },
];

const normalizeCustomers = (customers) => {
  const normalizedCustomers = { allId: [], byId: {} };
  customers.forEach((customer) => {
    normalizedCustomers.allId.push(customer._id);
    normalizedCustomers.byId[customer._id] = customer;
  });
  return normalizedCustomers;
};

const normalizedCustomers = normalizeCustomers(apiDatas);

export default normalizedCustomers;
