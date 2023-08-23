import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const experienceRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.experience.findMany({ orderBy: { startDate: "desc" } });
  }),
});
