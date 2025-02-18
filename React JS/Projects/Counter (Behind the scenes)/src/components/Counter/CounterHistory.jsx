import { useState } from "react";

import { log } from "../../log.js";

function HistoryItem({ count }) {
  log("<HistoryItem /> rendered", 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? "selected" : undefined}>
      {count}
    </li>
  );
}

export default function CounterHistory({ history }) {
  log("<CounterHistory /> rendered", 2);

  return (
    <ol>
      {history.map((count) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
}

// selected position will be reset when the component re-render because of the key.
//  Also it re-render full list of history items when a new item is added.(Not Optimized in rendering)

// Sol : we can provide a unique key to the component, we can use the count value as the key.
