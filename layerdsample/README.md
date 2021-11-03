# LayeredArchSample
NestJS + Prisma + React + Mysql の簡易アプリ

# 開発環境

- React Frontend  - http://localhost:3000
- GraphQL Server  - http://localhost:5000/graphql
- DB Admin - http://localhost:5555/ (you should be `$ yarn prisma studio`)

```
$ docker compose up -d
```

# how to use prisma
以下`docker compose exec server bash`の中で対応

### migrate
```
$ yarn prisma migrate dev --name init
```
### Admin
```
$ yarn prisma studio
```
