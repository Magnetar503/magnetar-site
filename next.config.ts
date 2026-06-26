import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    reactCompiler: true,
    output: "export",
    basePath: "/magnetar-site",
    assetPrefix: "/magnetar-site/",
    images: {
        unoptimized: true
    },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)

