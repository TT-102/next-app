import { performRequest } from "@/../lib/datocms";
import styles from "../page.module.css";

const PAGE_CONTENT_QUERY = `
{
  page {
    content {
      value
    }
    mainImage {
      alt
      url
    }
  }
}`;

export default async function About() {
  let { data } = await performRequest({ query: PAGE_CONTENT_QUERY });
  const sectionStyle = {
    backgroundImage: `url(${data.page.mainImage.url})`,
  };

  return (
    <div
      className={styles.main}
      style={{
        marginTop: "5em",
      }}
    >
      <section className={styles.topImg} style={sectionStyle}></section>

      <h1 style={{ marginTop: "3em" }}>About</h1>

      <section
        style={{
          marginTop: "3em",
          width: "100%",
          maxWidth: "850px",
          marginBottom: "4em",
        }}
      >
        {data.page.content.value.document.children.map((e) => {
          return (
            <div>
              {e.children.map((child) => {
                if (e.type == "heading") {
                  return (
                    <h2 style={{ margin: "20px 1.3em" }}> {child.value}</h2>
                  );
                }
                if (e.type == "paragraph") {
                  return <p style={{ margin: "20px 2em" }}>{child.value}</p>;
                }
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
}
