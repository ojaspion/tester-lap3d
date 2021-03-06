[![Build Status](https://travis-ci.org/higordiego/tester-lap3d.svg?branch=master)](https://travis-ci.org/higordiego/tester-lap3d)
[![bitHound Dependencies](https://www.bithound.io/github/higordiego/tester-lap3d/badges/dependencies.svg)](https://www.bithound.io/github/higordiego/tester-lap3d/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/higordiego/tester-lap3d/badges/code.svg)](https://www.bithound.io/github/higordiego/tester-lap3d)
[![bitHound Overall Score](https://www.bithound.io/github/higordiego/tester-lap3d/badges/score.svg)](https://www.bithound.io/github/higordiego/tester-lap3d)
[![NSP Status](https://nodesecurity.io/orgs/higor-diego/projects/d08ae528-73a6-4d05-b505-7a22f69830ce/badge)](https://nodesecurity.io/orgs/higor-diego/projects/d08ae528-73a6-4d05-b505-7a22f69830ce)
# Processo Seletivo 

    Candidate: Higor Diego

# Install dependencies

- Dependencies Application: ` npm i `
- Dependencies Docker: `npm i nodemon`
- Dependencies Docker: `bower install`
- Dependencies Doc: `npm i apidoc live-server -g`


# Generate Documentation
` apidoc -e "(node_modules|public|_tester)" -o doc-html /apidoc `

# Machine Local
### Technologies needed
- Nodejs 8.10.0 or superior
- MongoDB 3.6

### Start Documentation
`npm run doc`

### Tester
` npm run test`

### Eslint
` npm run lint:fix `

### Start Application
`npm start`

### Access
- Api: *http://localhost:3000*
- Documentation: *http://localhost:8080*

# Docker
### Tecnologies needed
- Docker 17.12.0
- Docker Compose 1.18.0

## Start Application
`docker-compose up`

### Access
- Api: *http://localhost:3000*
- Documentation: *http://localhost:8080*



