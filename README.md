# Project inactive

# CV Site example

This is an example site to test Cassandra, with NodeJS and Angular 2 Typescript, styled with Angular 2 Material, all prepared into Docker Compose.

## Prerequisites

To be able to test it, you need Docker with [Docker Compose](https://docs.docker.com/compose/install/) and [Git](https://git-scm.com/). To install the packages, you need [Node.js](https://nodejs.org/en/) with npm

## Launch the project

```Bash
git clone https://github.com/YvanGuidoin/CV-Test-Site.git
cd CV-Test-Site/Site
```

If you have Yarn:
```Bash
yarn
```
if you don't:
```Bash
npm install
```
then

```Bash
cd ..
docker-compose build
docker-compose up
```

Wait for a few seconds (around 30) for the database to initialize before opening your browser on <http://127.0.0.1> or on the IP of your Docker machine in you're using Docker Toolbox

## Components

### Cassandra

Database is based on a Cassandra cluster of 2 nodes.
First node to launch is a custom cassandra dockerfile to insert base data inside the application for simple testing.

You can edit data inserted with the file CassandraDB/base_data.cql and build the project again.

### Node.js

The server is a simple API for the database and don't have real logic beside authentication.

### Site

The site is an [Angular 2](https://angular.io/) project made with [Webpack 2](https://webpack.js.org/) and [Angular 2 Material](https://material.angular.io/). The files are made accessible using a Nginx instance.

Package management was made using [Yarn](https://yarnpkg.com/).

## Usual problems

If you have a slow computer, the input of data may be tried too soon during the launch of Cassandra. In this case you can enter this instruction after the docker-compose up

```Bash
docker exec cassandra-db cqlsh -f /base_data.cql
```
