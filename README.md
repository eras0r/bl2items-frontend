[![Stories in Ready](https://badge.waffle.io/eras0r/bl2items-frontend.png?label=ready&title=Ready)](https://waffle.io/eras0r/bl2items-frontend)
# Borderlands 2 items database frontend

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/eras0r/bl2items-frontend.svg?branch=master)](https://travis-ci.org/eras0r/bl2items-frontend)
[![NPM Dependency Status](https://www.versioneye.com/user/projects/5453bce722b4fb6b930000f3/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5453bce722b4fb6b930000f3)
[![Bower Dependency Status](https://www.versioneye.com/user/projects/5453bce122b4fb8ffb000004/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5453bce122b4fb8ffb000004)

This is the frontend web application for the REST API defined by the [borderlands items database backend] (https://github.com/eras0r/bl2items-backend).

The app is based on the yeoman [generator-angular-require] (https://github.com/aaronallport/generator-angular-require) and therefore is mainly based on the following core components:

* [angularJS] (https://angularjs.org/)
* [boostrap] (http://getbootstrap.com/)
* [RequireJS] (http://requirejs.org/)

In addition to these the following components are used:

* [ui-router] (https://github.com/angular-ui/ui-router)
* [restangular] (https://github.com/mgonto/restangular)
* [angular-http-auth] (https://github.com/witoldsz/angular-http-auth)
* [cryptojslib] (https://github.com/sytelus/CryptoJS)

## Prerequisites

* [npm] (https://www.npmjs.org/) installed
* [Borderlands 2 items database backend] (https://github.com/eras0r/bl2items-backend) up and running

## Setup

clone the repository:
```
git clone https://github.com/eras0r/bl2items-frontend
```
navigate the the directory where your clone is located and install npm dependencies
```
npm install
```
Install bower dependencies
```
bower install
```
Start the server
```
grunt serve
```
