import { z } from "astro/zod";
import { defineAction } from "astro:actions";

export const getAvailabilityById = defineAction({
  accept: "json",
  input: z.string(),
  handler: async (placeId) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const isAvailable = Math.random() > 0.5; // true | false
    const spotsAvailable = Math.floor(Math.random() * 10) + 1; // 1 - 10

    let message = "No hay lugares disponibles";

    if (isAvailable) {
      message =
        spotsAvailable > 1
          ? `${spotsAvailable} lugares disponibles`
          : "1 lugar disponible";
    }
    return {
      id: placeId,
      isAvailable: isAvailable,
      spotsAvailable: spotsAvailable,
      message: message,
    };
  },
});
