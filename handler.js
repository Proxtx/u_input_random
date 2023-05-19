import { resolveInput } from "../../public/api.js";
import config from "@proxtx/config";

export const evaluate = async (value) => {
  let min = await resolveInput(config.pwd, value.min);
  return (
    Math.floor(
      Math.random() * ((await resolveInput(config.pwd, value.max)) - min + 1)
    ) + min
  );
};
