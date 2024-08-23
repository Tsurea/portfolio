/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: "build",
	i18n: {
		locales: ["en", "fr", "it"],
		defaultLocale: "fr"
	}
}

export default nextConfig;
