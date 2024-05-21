## Press


[![unittests](https://github.com/westronet/press/actions/workflows/main.yaml/badge.svg)](https://github.com/westronet/press/actions/workflows/main.yaml)


This is `press`, a Westronet custom app that runs Westro Cloud. This app manages infrastructure, subscription, marketplace, SaaS and much more.

> press: "I have a brother, without which I cannot live, agent"

The other half of the Westro Cloud infrastructure is [agent](https://github.com/frappe/agent). Which is a flask application that runs on every server in a typical cluster and carries out tasks on HTTP requests. Creating a new site, installing an app, updating a site, creating a bench and everything in between is just a request (`Agent Job`) away.

> Note that, this README is in a very early WIP state and only covers a tiny bit of FC. More to come!



## Prerequisites

- Docker
- Certbot with route53 plugin
- AWS account (for route53 & S3)
- Digital Ocean account (for [container registry](https://www.digitalocean.com/products/container-registry))

## Local Setup

You can find a detailed walkthough for setting up a local FC cluster [here](https://frappecloud.com/docs/local-fc-setup).

## Some Core DocTypes

- Server
- Database Server
- Proxy Server
- Site
- Release Group
- Deploy Candidate
- Bench
- App
- App Source
- App Release
- TLS Certificate

## The Front-end

You can read more about the VueJS frontend for Westro Cloud [here](./dashboard/README.md).
