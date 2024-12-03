import { sql } from "./db.js";

export class Database {



    async list(search) {
        let videos 

        if (search){
            videos = awaitsql`SELECT * FROM videos WHERE title ilike "%${search}%"`
        }else{
            videos = await sql`SELECT * FROM videos`
        }
        return videos

    }

    async create(video) {
        const videoid = crypto.randomUUID();
        return await sql`INSERT INTO videos (id,title, description, duration) VALUES (${videoid}, ${video.title}, ${video.description}, ${video.duration})`
        
    }



    update(id, video) {


    }

    delete(id) {

    }

}