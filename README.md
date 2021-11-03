# GCPsample
NestJS + Prisma + React + Mysql の簡易アプリ

# 開発環境

- React Frontend  - http://localhost:3000
- GraphQL Server  - http://localhost:5000/graphql
- DB Admin - http://localhost:5555/ (you should be `$ yarn prisma studio`)

```
$ docker compose up -d
```

# デプロイ
```
$ gcloud init
$ gcloud builds submit --config cloudbuild.yaml 
```
