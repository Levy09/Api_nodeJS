import  { fastify} from "fastify";
import { Database}  from "./database_memory.js";

const server = fastify();
const database = new Database();




server.post("/videos", (req,res)=>{
     
    const {title, description, duration} = req.body
    

    database.create({
        title : title,
        description : description,
        duration : duration
    })

    

  return res.status(201).send("video created")

})



server.get("/videos", (request)=>{
    const search = request.query.search
      const videos =  database.list(search)

      return videos
    
})

server.put("/videos/:id", (req,res)=>{
    const videoId =  req.params.id
    const {title, description, duration} = req.body

   database.update(videoId, {
    title : title,
    description : description,
    duration : duration
   })
   
   res.status(204).send()
   

})

server.delete("/videos/:id", (req,res)=>{
   const videoId  =  req.params.id
   database.delete(videoId)
   res.status(200).send()
})


server.listen({
    port : 3333
})
