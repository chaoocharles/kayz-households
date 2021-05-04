import pot3 from "../../assets/images/products/pot-and-pans-set-3.jpg";
import pot from "../../assets/images/products/pot-and-pans-set-0.jpg";
import cups from "../../assets/images/products/cups-2.jpg";
import cups4 from "../../assets/images/products/cups-4.jpg";

const ProductItems = [
  {
    id: 1,
    title: "Pots and Pans Set 1",
    summary: "Red",
    desc: "long description",
    price: 599.99,
    countInStock: 0,
    rating: 4,
    numReviews: 4,
    image: pot,
    cartQuantity: 0,
    category: "pots",
  },
  {
    id: 2,
    title: "Cups and Plates",
    summary: "Black",
    desc: "long description",
    price: 499.99,
    countInStock: 4,
    rating: 4.5,
    numReviews: 4,
    image: cups,
    cartQuantity: 0,
    category: "utensils",
  },
  {
    id: 3,
    title: "Cups and Plates",
    summary: "Yellow",
    desc: "long description",
    price: 699.99,
    countInStock: 0,
    rating: 5,
    numReviews: 6,
    image: cups4,
    cartQuantity: 0,
    category: "utensils",
  },
  {
    id: 4,
    title: "Pots and Pans Set 4",
    summary: "Red",
    desc: "long description",
    price: 599.99,
    countInStock: 0,
    rating: 3.5,
    numReviews:7,
    image: pot3,
    cartQuantity: 0,
    category: "pots",
  },
];

export default ProductItems;
