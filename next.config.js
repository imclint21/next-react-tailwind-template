/**
 * @type {{webpack: (function(*): *), reactStrictMode: boolean, swcMinify: boolean}}
 */
const nextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader"
		});
		return config;
	},
	// reactStrictMode: true,
	// swcMinify: true
}

module.exports = nextConfig
