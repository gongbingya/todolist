// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode : "development" ,
	entry : "./app/main.js",
	output : {
		publicPath : "xuni",
		filename : "bundle.js"
	},
	module : {
		rules : [
			{
				test : /\.vue$/,
				loader : "vue-loader"
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader",
			}
		]
	},
	//这个插件必须要装
	plugins: [
		new VueLoaderPlugin()
	],
	//别名，必须要写的
	resolve: {
	    alias: {
	      	'vue$': 'vue/dist/vue.esm.js'  
	    }
  	}
}