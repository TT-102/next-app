"use client";
import React, { useState } from "react";
import styles from "../../app/page.module.css";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background: "white",
        margin: "0 40px",
        padding: "10px 0",
      }}
    >
      <div style={{ position: "absolute", left: 0 }}>
        <button
          className={styles["rounded-btn"]}
          aria-label="Decrement value"
          onClick={() => {
            if (count == 1) return;
            else setCount(count - 1);
          }}
        >
          -
        </button>
        <span style={{ padding: "20px" }}>{count}</span>
        <button
          className={styles["rounded-btn-plus"]}
          aria-label="Increment value"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "white",
          margin: "0 10px",
          padding: "10px 0",
          position: "absolute",
          right: 0,
        }}
      >
        <button
          className={`${styles.buttons} addBtn`}
          style={{ padding: "15px 30px" }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
