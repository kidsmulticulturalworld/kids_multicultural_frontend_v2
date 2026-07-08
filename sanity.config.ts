"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";

const projectId = sanityProjectId || "missing-project-id";
const dataset = sanityDataset || "production";

export default defineConfig({
  name: "kmw-blog",
  title: "Kids Multicultural World Blog",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: sanityApiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
});
