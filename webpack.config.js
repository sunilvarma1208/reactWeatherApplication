var config = {
    devtool: 'eval-source-map',
   entry: './main.js',
   watch: true,


   output: {
      path: __dirname,
      filename: 'index.js',

   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',


            query: {
               presets: ['es2015', 'react']
            }
         },
         {
           test: /\.css$/,
           loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
         }

      ]
   }
}

module.exports = config;
