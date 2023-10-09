// "use client";
import { performRequest } from "@/../lib/datocms";
import styles from "@/../../src/app/page.module.css";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../features/cart/cartSlice";

export default async function Product({ params }) {
  // const dispatch = useDispatch();
  const { data } = await performRequest({
    query: `
   {
      allProducts(filter: {id: {eq: "${params.id}"}}) {
        id
        name
        price
        description {
          value
        }
        mainImage {
          url
        }
      }
    }`,
  });
  const sectionStyle = {
    backgroundImage: `url(${data.allProducts[0].mainImage.url})`,
  };

  return (
    <div className={styles.content}>
      <section className={styles["product-head"]}>
        <div className={styles["product-img"]} style={sectionStyle}></div>
        <div className={styles["product-info"]}>
          <h1>{data.allProducts[0].name}</h1>
          <p
            style={{
              background: "lightblue",
              width: "fit-content",
              padding: "5px 10px",
              fontSize: "20px",
              fontWeight: "500",
              marginTop: "0.5em",
            }}
          >
            {data.allProducts[0].price}:-
          </p>
          <button
            className={styles.buttons}
            style={{
              marginTop: "1em",
              width: "100%",
              justifyContent: "center",
            }}
            // onClick={() => dispatch(addToCart(data.allProducts[0]))}
          >
            Add
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "25px", paddingLeft: "20px" }}
            >
              east
            </span>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "25px", paddingLeft: "20px" }}
            >
              shopping_cart
            </span>
          </button>
          <div style={{ marginTop: "2em" }}>
            <h3>Product information</h3>
            <hr
              style={{
                width: "100%",
                height: "2px",
                background: "white",
                border: "none",
                margin: "1em 0",
              }}
            />
            {data.allProducts[0].description.value.document.children.map((e) =>
              e.children.map((child) => {
                if (child.type == "listItem") {
                  child.children.map((info) => {
                    return <h3>{info}</h3>;
                  });
                }
                if (child.type == "span") {
                  return <p style={{ marginTop: "20px" }}>{child.value}</p>;
                }
              })
            )}
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ textAlign: "center", margin: "5em 0" }}>Other products</h2>
      </section>
    </div>
  );
}
