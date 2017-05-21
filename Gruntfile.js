module.exports = function(grunt){

	grunt.initConfig({

		cssmin: {
		  target: {
		    files: {
		      './css/base.min.css': ['./css/base.css'],
		      './css/container.min.css': ['./css/container.css'],
		      './css/footer.min.css': ['./css/footer.css'],
		      './css/header.min.css': ['./css/header.css'],
		      './css/hit-box.min.css': ['./css/hit-box.css'],
		      './css/mediaquery.min.css': ['./css/mediaquery.css'],
		      './css/wrapper.min.css': ['./css/wrapper.css']
		    }
		  }
		},
		watch:{
	css:{
		files:['./css/base.css'],
		tasks:['cssmin'],
	},
},
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};