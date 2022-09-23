import { useEffect } from "react";
import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../services";
// import { cardItems } from "./CardItemData";
import styles from "./displayItem.module.css";
const initialApiData = {
  apiURL: "",
  method: "GET",
  postMethodData: {},
  encodedToken: "",
};
const DisplayItem = () => {
  const [apiData, setApiData] = useState(initialApiData);
  const [product, setProduct] = useState({});
  const [shoeSize, setSize] = useState(null);
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
          <button className={styles.btn}>ADD TO CART</button>
        </div>
      </section>
      ;
    </>
  );
};

export default DisplayItem;
