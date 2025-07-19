## Expess Backend project create
```
npm init -y
```
```
npm i express typescript 
```
```
npm i -D @types/node @types/express
```
```
npx tsc --init
```

## Necessary Packages 

- dotenv
```
npm i dotenv
```
- cors 
```
npm i cors
```
```
npm i -D @types/cors
```
- body-parser
```
npm i body-parser
```
```
npm i jsonwebtoken
```
```
npm i -D@types/jsonwebtoken
```
```
npm i uuid
```
```
npm i -D @types/uuid
```
```
npm i bcrypt
```
```
npm i -D @types/bcrypt
```

### Open SSL Key Generate
```
openssl rand -base64 32
```

### Production Deployment
- Install  pm2 library for production management
```
npm i -g pm2
```
- 
```
git clone your_repo
```
```
cd nodejs-express-docker\server
```
```
npm install
```
```
pm2 start
```
