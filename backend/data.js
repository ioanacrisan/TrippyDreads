import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ioana',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },

    {
      name: 'Ana',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: '1',
      name: 'Deep Blue Sea - Full Set',
      slug: 'deep-blue-sea-set',
      category: 'Full Sets',
      image: '/images/deep-blue-sea.jpg',
      price: 250,
      countInStock: 4,
      rating: 4.5,
      numReviews: 10,
      description:
        'Take a dive into the mesmerizing sea, at night you might notice its special iluminating magic!',
    },

    {
      //_id: '2',
      name: 'Cloudy Sunset - Full Set',
      slug: 'cloudy-sunset-set',
      category: 'Full Sets',
      image: '/images/cloudy-sunset.jpg',
      price: 250,
      countInStock: 1,
      rating: 4.5,
      numReviews: 10,
      description:
        'Do you remember an evening with a magical sunset? Even the fact that there were clouds made it special',
    },
  ],
};
export default data;
