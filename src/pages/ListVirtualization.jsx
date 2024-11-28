import React from "react";
import { FixedSizeList as List } from "react-window";

const ListVirtualization = () => {
  const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

  return (
    <>
      <h1>ListVirtualization</h1>
      <ul>
        <List height={300} width="100%" itemCount={items.length} itemSize={35}>
          {({ index, style }) => <li style={style}>{items[index]}</li>}
        </List>
      </ul>
    </>
  );
};

export default ListVirtualization;
