import TempConversion from "./TempConversion";

function Temperature({ temperature }) {
  const temp = TempConversion(temperature);
  return temp;
}

export default Temperature;