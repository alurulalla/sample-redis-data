const { v4: uuidv4 } = require("uuid");

function price(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const products = [
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },

  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
  {
    id: uuidv4(),
    name: `metronet product ${uuidv4()}`,
    price: price(1, 100),
    description: `Faster internet speed - ${uuidv4()}`,
  },
];

module.exports = products;
