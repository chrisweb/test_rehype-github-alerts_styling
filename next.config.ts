import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import { rehypeGithubAlerts } from 'rehype-github-alerts'

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
    options: {
        remarkPlugins: [],
        // type does NOT accept array with one or two strings
        // ts-expect-error rehypePlugins is from @mdxjs/mdx
        //rehypePlugins: [['rehype-github-alerts']],
        rehypePlugins: [rehypeGithubAlerts],
    },
})

export default withMDX(nextConfig)

