//import type { ComponentPropsWithoutRef } from 'react'
import type { MDXComponents } from 'mdx/types'
//import type { Route } from 'next'
//import type { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

//type ListPropsType = ComponentPropsWithoutRef<'ul'>
//type AnchorPropsType = ComponentPropsWithoutRef<'a'>
// Note: ImageProps get imported from 'next/image'
//type AsidePropsType = ComponentPropsWithoutRef<'aside'>
//type InputPropsType = ComponentPropsWithoutRef<'input'>

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        ...components,
    }
}