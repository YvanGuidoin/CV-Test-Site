# THIS IS A WIP, SOME THINGS MIGHT NOT BE WORKING AS INTENDED, IT'S NORMAL

# CV Site example

This is an example site to test Cassandra, with NodeJS and Angular 2 Typescript, styled with Angular 2 Material, all prepared into Docker Compose.

## Prerequisites

To be able to test it, you need Docker with [Docker Compose](https://docs.docker.com/compose/install/) and [Git](https://git-scm.com/).

## Launch the project

```Bash
git clone https://github.com/YvanGuidoin/CV-Test-Site.git
cd CV-Test-Site
docker-compose build
docker-compose up
```

Wait for a few seconds (around 30) for the database to initialize before opening your browser on <http://localhost>

## Cassandra

Database is based on a Cassandra cluster of 2 nodes.
First node to launch is a custom cassandra dockerfile to insert base data inside the application for simple testing.

You can edit data inserted with the file CassandraDB/base_data.cql and build the project again.

## Node.js

The server is a simple API for the database and don't have real logic beside authentication.

## Site

The site is an [Angular 2](https://angular.io/) project made with System.js, [Angular 2 Material](https://github.com/angular/material2) and [Angular 2 Flex Layout](https://github.com/angular/flex-layout).

Package management was made using [Yarn](https://yarnpkg.com/).
