import { defineAction } from "astro:actions";
import prisma from "../../lib/prisma";
import type { Place } from "../../generated/prisma/client";

export const getPlaces = defineAction({
  accept: "json",
  handler: async () => {
    try {
      const places: Place[] = await prisma.place.findMany();
      return places;
    } catch (error) {
      console.log(error);
      throw new Error("error to get places");
    }
  },
});
