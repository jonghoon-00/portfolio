// import { mdxComponents } from "@/components/mdx/Elements";
import { MDXComponents } from "mdx/types";
import { mdxComponents } from "./components/mdx/Elements";

// This file allows you to provide custom React components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
  };
}
