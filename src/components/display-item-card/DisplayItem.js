import { useEffect } from "react";
import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/auth/AuthProvider";
import { useCartAndWishlist } from "../../contexts/cartAndwishlist/CartAndWishlistProvider";
import { useFetch } from "../../services";
import styles from "./displayItem.module.css";
import { Toast } from "../../utils/Toast";
import { useNavigate } from "react-router-dom";

const initialApiData = {
  apiURL: "",
  method: "GET",
  postMethodData: {},
  encodedToken: "",
};
const DisplayItem = () => {
  const navigate = useNavigate();
  const {
    cartAndWishlistDispatch,
    showCart,
    setShowCart,
    showWishlist,
    setShowWishlist,
    cartItems,
  } = useCartAndWishlist();

  const {
    userAuthState: { isUserLoggedIn },
  } = useAuth();

  const [apiData, setApiData] = useState(initialApiData);
  const [product, setProduct] = useState({});
  const [shoeSize, setSize] = useState(null);
  console.log(product);
  console.log(product.isAddedToCart);
  const sizeChangeHandler = (e) => {
    setSize(e.target.value);
  };
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    setApiData((prev) => {
      return {
        ...prev,
        apiURL: `/products/${id}`,
        method: "GET",
      };
    });
  }, [params]);

  const { isLoading, serverResponse, error } = useFetch(
    apiData.apiURL,
    apiData.method
  );

  useEffect(() => {
    if (serverResponse) {
      setProduct(() => ({ ...serverResponse.data.product[0] }));
    }
  }, [serverResponse]);
  console.log(product.isAddedToCart);
  const addToCartHandler = (e) => {
    e.stopPropagation();
    if (isUserLoggedIn) {
      cartAndWishlistDispatch({ type: "ADD_TO_CART", payload: { ...product } });
      let setTimeoutID;
      setTimeoutID = setTimeout(() => {
        setShowCart(true);
      }, 1000);
    } else {
      Toast({
        type: "warning",
        msg: "Please Login To Add to Cart",
      });
      navigate("/login");
    }
  };
  return (
    <>
      <section className={styles.item_section}>
        <div className={styles.item_image_div}>
          <img src={product?.imageUrl} alt="name" />
        </div>
        <div className={styles.item_details_div}>
          <p className={styles.brand}>{product?.make}</p>
          <p className={styles.type}>{product?.description}</p>
          <p className={styles.name}>{product?.name}</p>
          <p className={styles.price}>${product?.originalPrice}</p>
          <div className={styles.shoe_size}>
            {product?.availableSize?.map((size) => {
              return (
                <button
                  type="button"
                  value={size}
                  onClick={(e) => sizeChangeHandler(e)}
                  className={`${shoeSize == size ? styles.change_bg : ""}`}
                >
                  {size}
                </button>
              );
            })}
          </div>

          <button className={styles.btn} onClick={addToCartHandler}>
            ADD TO CART
          </button>

          <button className={styles.btn}>ADD TO WISHLIST</button>
        </div>
      </section>
      ;
    </>
  );
};

export default DisplayItem;
