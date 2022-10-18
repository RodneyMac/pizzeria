import * as actionTypes from "./types";

const initialState = {
  products: [
    {
      id: 1,
      imgUrl: require("../../assets/images/muzzarella.jpg"),
      title: "Muzzarella",
      description: "Queso muzzarella y aceitunas",
      price: 400,
      category: "Pizzas"
    },
    {
      id: 2,
      imgUrl: require("../../assets/images/napolitana.jpg"),
      title: "Napolitana",
      description: "Tomate, morrón, queso y aceitunas",
      price: 400,
      category: "Pizzas"
    },
    {
      id: 3,
      imgUrl: require("../../assets/images/jamonymorron.jpg"),
      title: "Jamón y Morrón",
      description: "Jamón, morrón, queso y aceitunas",
      price: 400,
      category: "Pizzas"
    },
    {
      id: 4,
      imgUrl: require("../../assets/images/empanada_atun.jpg"),
      title: "Empanada de Atún",
      description: "Atún, verduras",
      price: 120,
      category: "Empanadas"
    },
    {
      id: 5,
      imgUrl: require("../../assets/images/empanada_carne.jpg"),
      title: "Empanada de Carne",
      description: "Carne y verduras",
      price: 120,
      category: "Empanadas"
    },
    {
      id: 6,
      imgUrl: require("../../assets/images/empanada_jamonyqueso.jpg"),
      title: "Empanada de jamón y queso",
      description: "Jamón, queso, salsa blanca",
      price: 120,
      category: "Empanadas"
    },
    {
      id: 7,
      imgUrl: require("../../assets/images/agua.jpg"),
      title: "Agua",
      description: "Agua mineral sin gas 400 ml",
      price: 200,
      category: "Bebidas"
    },
    {
      id: 8,
      imgUrl: require("../../assets/images/gaseosa.jpg"),
      title: "Gaseosa",
      description: "Sabores variados 400 ml",
      price: 250,
      category: "Bebidas"
    },
    {
      id: 9,
      imgUrl: require("../../assets/images/cerveza.jpg"),
      title: "Cerveza",
      description: "En lata 400 ml",
      price: 300,
      category: "Bebidas"
    },
    {
      id: 10,
      imgUrl: require("../../assets/images/bombones.jpg"),
      title: "Bombones",
      description: "Chocolate, menta",
      price: 300,
      category: "Postres"
    },
    {
      id: 11,
      imgUrl: require("../../assets/images/helado.jpg"),
      title: "Helado",
      description: "Variedad de sabores",
      price: 150,
      category: "Postres"
    }
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }]
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: + action.payload.qty }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      }
    default:
      return state;
  }
};

export default shopReducer;