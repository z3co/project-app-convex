import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createProject = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    status: v.string(),
    endDate: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("Inserting into projects");
    await ctx.db.insert("projects", {
      name: args.name,
      describtion: args.description,
      status: args.status,
      endDate: args.endDate,
    });
  },
});

export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").order("desc").take(20);

    return projects.reverse();
  },
});
