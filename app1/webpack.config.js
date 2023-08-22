const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require("./package.json").dependencies;

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "app1",
        filename: "remoteEntry.js",
        remotes: {
          app1: "app1@http://localhost:3001/remoteEntry.js",
          host:"host@http://localhost:3000/remoteEntry.js"
        },
        exposes: {
            "./Header": "./src/components/Header",
        },
        shared: {
          ...deps,
          "react": {
            singleton: true,
            eager:true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            eager:true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
