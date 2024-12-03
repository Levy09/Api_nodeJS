import  { fastify} from "fastify";
import { Database}  from "./database _postgres.js"

const server = fastify();
// const database = new Database();
const database = new Database();




server.post("/videos",async (req,res)=>{
     
    const {title, description, duration} = req.body
    

  await  database.create({
        title : title,
        description : description,
        duration : duration
    })

    

  return res.status(201).send("video created")

})



server.get("/videos", async (request)=>{
    const search = request.query.search
      const videos = await database.list(search)
      console.log(videos)
      return videos
    
})

server.put("/videos/:id", async (req,res)=>{
    const videoId =  req.params.id
    const {title, description, duration} = req.body

  await database.update(videoId, {
    title : title,
    description : description,
    duration : duration
   })
   
   res.status(204).send()
   

})

server.delete("/videos/:id", async (req,res)=>{
   const videoId  =  req.params.id
  await database.delete(videoId)
   res.status(200).send()
})


server.listen({
  host : "0.0.0.0",
    port : process.env.PORT ?? 3333
})
