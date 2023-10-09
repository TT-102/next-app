import { performRequest } from "@/../lib/datocms";
import styles from "@/../../src/app/page.module.css";
import Link from "next/link";
import Counter from "../../features/counter/Counter";

const PAGE_CONTENT_QUERY = `
{
  allProducts {
    id
    name
    price
    mainImage {
      url
      alt
    }
  }
}`;

export default async function Products() {
  const { data } = await performRequest({ query: PAGE_CONTENT_QUERY });

  return (
    <div className={styles.main}>
      <h1
        style={{ textAlign: "center", fontSize: "30px", marginBottom: "3em" }}
      >
        Products
      </h1>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            rowGap: "80px",
            maxWidth: "1200px",
            margin: "0 auto 15em auto",
            justifyContent: "center",
          }}
        >
          {data.allProducts.map((e, index) => (
            <div>
              <ProductComponent key={e.id} data={e} />
              <Counter key={e.id + index} data={e.id} id={e.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ProductComponent = (props) => {
  const { data } = props;
  return (
    <Link href={`/products/` + data.id}>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          height: "520px",
        }}
      >
        <div className={styles["img-wrapper"]}>
          <img
            src={data.mainImage.url}
            alt={data.mainImage.alt}
            className={styles["product-small-img"]}
          />
        </div>

        <div
          style={{
            background: "white",
            padding: "1.5em",
            height: "170px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2 style={{ padding: "0 20px" }}>{data.name}</h2>
            <h3>{data.price}:-</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
