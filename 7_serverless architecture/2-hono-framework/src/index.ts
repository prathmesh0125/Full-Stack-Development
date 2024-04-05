import { Hono } from 'hono'

const app = new Hono()
async function authmiddleware(c:any,next:any) {
  if(c.req.header("Authorization")){
   await next();
  }
  else{
    return c.text("you don't have access");
  }
}

app.post('/', authmiddleware, async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app