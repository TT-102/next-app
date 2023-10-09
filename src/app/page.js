import Link from "next/link";
import styles from "../app/page.module.css";
import { performRequest } from "@/../lib/datocms";

const PAGE_CONTENT_QUERY = `
{
  startpage {
    title
    content {
      value
    }
    mainImage {
      url
    }
  }
  allProducts {
    mainImage {
      url
    }
  }
}`;

export default async function Home() {
  const { data } = await performRequest({ query: PAGE_CONTENT_QUERY });

  const sectionStyle = {
    backgroundImage: `url(${data.startpage.mainImage.url})`,
  };

  return (
    <main
      style={{
        marginTop: "5em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <section className={styles.topImg} style={sectionStyle}>
        <h1
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "40px",
          }}
        >
          {data.startpage.title}
        </h1>
      </section>
      <section className={styles["body-text"]}>
        {data.startpage.content.value.document.children.map((e) =>
          e.children.map((i) => <ContentComponent data={i.value} />)
        )}
      </section>
      <section>
        <Link
          href="/products"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button className={styles.buttons}>Current offers & products</button>
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "25% 50% 25%",
            rowGap: "20px",
            padding: "4em 0",
            maxWidth: "1200px",
            margin: "auto",
            justifyContent: "center",
          }}
        >
          {data.allProducts.map((e) => (
            <div style={{ width: "100%", height: "100%" }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: "0 10px",
                }}
                src={e.mainImage.url}
              />
            </div>
          ))}
        </div>

        <div style={{ padding: "4em" }}>
          <h2 style={{ textAlign: "center" }}>
            Contact us for more information
          </h2>
          <Link
            href="/contact"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "2em 0 4em 0",
            }}
          >
            <button className={styles.buttons}>Contact us</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

const ContentComponent = (props) => {
  const { data } = props;
  return <p>{data}</p>;
};
