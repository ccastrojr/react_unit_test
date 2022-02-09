/* eslint-disable no-unused-expressions */
import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from 'react';

import Product from '../../models/Product';

interface CartItem extends Product {
  count: number;
}

interface CartContextData {
  products: CartItem[];
  addToCart(item: Product): void;
  removeToCart(id: number): void;
  getTotalPrice: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const getLocalStorageItems = (): CartItem[] => {
    const itemsStorage = localStorage.getItem('@ReactUnitTest:cart');
    if (itemsStorage) return JSON.parse(itemsStorage);

    return [];
  };

  const modifyLocalStorage = (items: CartItem[]) => {
    localStorage.setItem('@ReactUnitTest:cart', JSON.stringify(items));
  };

  const [products, setProducts] = useState<CartItem[]>(() => {
    return getLocalStorageItems();
  });

  useEffect(() => {
    modifyLocalStorage(products);
  }, [products]);

  const addToCart = useCallback(
    (item: Product) => {
      const productReceived = products.find(product => product.id === item.id);

      if (!!productReceived) {
        productReceived.count += 1;
        setProducts([...products]);
      } else {
        setProducts([...products, { ...item, count: 1 }]);
      }
    },
    [products],
  );

  const removeToCart = useCallback(
    (id: number) => {
      const productsStored = [...products];
      const index = productsStored.findIndex(item => item.id === id);

      productsStored[index].count > 1
        ? (productsStored[index].count -= 1)
        : productsStored.splice(index, 1);

      setProducts([...productsStored]);
    },
    [products],
  );

  const getTotalPrice = useMemo(() => {
    let finalPrice = 0;

    products.forEach(item => {
      finalPrice += item.price * item.count;
    });

    return finalPrice;
  }, [products]);

  return (
    <CartContext.Provider
      value={{ products, addToCart, removeToCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) throw new Error('useCart must be used with CartProvider');

  return context;
}

export { CartProvider, useCart };
