### Prisma Read Replica Configuration
- https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/read-replicas
- https://www.prisma.io/docs/orm/prisma-schema/data-model/models (data model sample)

```
npm i @prisma/extension-read-replicas @prisma/client
```
```
npm i -D prisma 
```

### Force read by primary
```
const posts = await prisma.$primary().post.findMany();
```
### Force ready by replica
```
const user = await prisma.$replica().user.findFirst();
```
