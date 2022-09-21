### DEPLOYMENT
 
1. Docker – this is quite easy
-  ```docker build -t nextjs-docker .```
- ```docker run -p 3000:3000 nextjs-docker```
- take a look at `pages/_document.tsx` there is a important part for graceful shutdown
 
2. To use swarm you have to initialize it
- ```docker swarm init```
Then create a service. In this case we have 3 replicas and we mount the volume. This is a good practice to mount volume. Thanks to volume we can avoid cache inconsistency between nodes and replicas.
Important: Switch off in-memory cache for Incremental Static Regeneration. This prevents inconsistencies between replicas.
 
```javascript
//next.config.js file
experimental: {
   isrMemoryCacheSize: 0,
 }
 ```
 
- ```docker service create --mount type=volume,source=my-nestjs-volume,destination=/app/.next --replicas 3 --publish published=3000,target=3000 --name my-service nextjs-docker```
- then you can access the app on your ip, like that x.x.x.x:3000 (it's not going to work on localhost), and you may proxy the port to port 80 with nginx, apache or similar. Of course there might be some networking to carry on as well.
 
3. You can use docker-compose with dev mode
- ```docker network create -d overlay nextNetwork```
- ```docker-compose -f docker-compose.dev.yml build```
- ```docker-compose -f docker-compose.dev.yml up```

- for production use:
- ```docker stack deploy -c docker-compose.yml my-stack```
 
4. PM2
- install ```npm install -g pm2```
- create a file ```pm2.json``` same as the one visible in this repo and run it with ```pm2 start pm2.json```. In this case we use cluster mode for spawning the process on each thread
- to monitor pm2 take a look at https://pm2.keymetrics.io/docs/usage/monitoring/ 

