import { useState } from "react";

export default function Todo() {
  const [data, setData] = useState({ items: [], newItem: "" });
  // setData(() => {});
  const handleChange = (e) => {
    setData({ ...data, newItem: e.target.value });
  };
  const addItems = () => {
    if (data.newItem.trim()) {
      setData({ items: [...data.items, data.newItem], newItem: "" });
    }
  };
  const clearItems = () => {
    setData({
      items: [],
      newItem: "",
    });
  };
  return (
    <>
      <input
        type="text"
        placeholder="add todos"
        value={data.newItem}
        onChange={handleChange}
      />
      <button onClick={addItems}>add todos</button>
      <button onClick={clearItems}>clear all todos</button>
      <ul>
        {data.items.map((item, i) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div
              style={{
                display: "flex",
              }}
            >
              <li
                key={i}
                style={{
                  marginRight: "2rem",
                  paddingRight:'2rem'
                }}
              >
                {item}
              </li>
              {/* <button
                key={i}
                style={{
                  marginRight: 10,
                }}
              >
                mark as done
              </button>
              <button>delete todo item</button> */}
            </div>
          );
        })}
      </ul>
    </>
  );
}
