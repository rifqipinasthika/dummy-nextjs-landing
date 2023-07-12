/** @type {import('next').NextConfig} */
const nextConfig = {
    //Set export to base html
    output: 'export',

    // Set the base path for your Next.js application
    basePath: '/dummy-nextjs-landing',

    //With this option set, urls like /about will redirect to /about/.
    trailingSlash: true
}

module.exports = nextConfig
