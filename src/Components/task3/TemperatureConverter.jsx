import { Button, TextField } from "@mui/material";
import { useState } from "react";

const TemperatureConverter = () => {
  const [cel, setCel] = useState("");
  const [far, setFar] = useState("");
  const handleCel = (e) => {
    const value = e.target.value;
    setCel(value);
    setFar((value * 9) / 5 + 32)
  };
  const handleFar = (e) => {
    const value = e.target.value;
    setFar(value);
    setCel(((value - 32) * 5) / 9)
  };
  const handleClick = () => {
    setCel("");
    setFar("");
  };
  return (
    <div>
      <TextField
        id="outlined-basic-с"
        label="Цельсия"
        variant="outlined"
        value={cel}
        onInput={handleCel}
      />
      <TextField
        id="outlined-basic-а"
        label="Фаренгейт"
        variant="outlined"
        value={far}
        onInput={handleFar}
      />
      <Button variant="contained" onClick={handleClick}>
        Сбросить
      </Button>
    </div>
  );
};

export default TemperatureConverter;
