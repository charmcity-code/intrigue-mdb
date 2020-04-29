import React, { useState, useEffect } from "react";

const Machine = () => {
  const [loading, setLoading] = useState(true);
  const [machines, setMachines] = useState([
    { label: "Loading...", value: "" },
  ]);
  const [value, setValue] = useState("External Discovery - Light, Active");
  const selected = machines.find((mac) => mac.value === value);

  useEffect(() => {
    let unmounted = false;
    fetch("http://localhost:7777/api/v1/machines")
      .then((res) => res.json())
      .then((data) => {
        if (!unmounted) {
          setMachines(
            data.result
              .filter((machine) => machine.user_selectable)
              .map((machine) => ({
                label: machine.pretty_name,
                value: machine.pretty_name,
                description: machine.description,
              }))
          );
        }
      });
    setLoading(false);
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <div>
      <select
        disabled={loading}
        className='browser-default custom-select'
        onChange={(e) => setValue(e.currentTarget.value)}
      >
        {machines.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <p>{selected ? selected.description : ""}</p>
    </div>
  );
};

export default Machine;
