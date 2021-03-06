#!/usr/bin/env node
var Parse = require('parse').Parse,
		comm = require('commander');
require('colors');

var auth = require(__dirname + '/auth');

comm.version(require('./package.json').version);
comm.usage('command [options] [arguments]');

comm.command('add <address>', 'bookmark a URL')
comm.command('tag [<tag> <tag>...]', 'list tags or lookup bookmarks by <tags>')
comm.command('search <query>', 'lookup bookmarks by <query>')

comm
	.command('login')
	.description('log in to your omg account')
	.action(auth.logIn);

comm
	.command('logout')
	.description('terminate your login session')
	.action(auth.logOut);

comm
	.command('signup')
	.description('sign up for a new omg account')
	.action(auth.signUp);

comm.parse(process.argv);