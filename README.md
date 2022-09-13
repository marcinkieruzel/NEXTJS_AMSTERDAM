# Real Estate Web Page Simulation
 
 
1. We are going to create web page of an Real Estate Business. Our job is to show an offer to potential clients, let them choose the property of their interest and send their choices via form.
2. We will be using json-server to mock an api
``` ./node_modules/.bin/json-server --watch ./data/feed.json --port 3004```
Execute the command and check the browser or postman http://localhost:3004. You can make a regular http get request to this resource.
3. In `pages/properties/index.tsx` make a request for all properties (`http://localhost:3004/properties`) and render them on a page. In this case you'd use SPA. To avoid unnecessary refetching data use `swr` or `react-query`.
4. We are going to create a page of a single property but we'll do that in three different ways. In `pages/properties/ssr/[property].tsx` use ssr and so on with isr and ssg. This approach will let us compare all of those strategies.
5. Now it's time for global state management. Create context in `_app.tsx`. The context should allow us to list and change user choices (properties).
6. In `pages/myproperties.tsx` list user choices and let the user send it to our backend.
7. Create an api route in `pages/api/lead.ts`. Respond with success when the request has email and properties in its body and when the request is actually a post. For training purposes we do not send this lead anywhere else.

Tips:
- try to create some interfaces for api
- use `Image` component for images
- make sure you use `Link` component for links
- use async/await and try/catch for api call
