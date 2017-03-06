"use strict";
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    php: {
        app: {
            options: {
                port: 5002,
                keepalive: true,
                open: true
            }
        }
    },
    todo: {
			options: {
				marks: [
					{
						pattern: "BURP",
						color: "pink"
					},
					{
						name: "TODO",
						pattern: /TODO/,
						color: "yellow"
					}
				],
				file: "todo.md",
				githubBoxes: true,
				colophon: true,
				usePackage: true
			},
			src: [
				'index.html','css/**.css','js/**/**.js','!js/lib/**','views/**'
			]
		}
  });

  grunt.registerTask('default', ['php:app']);
};
