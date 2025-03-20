import dotenv from "dotenv"
import connectDB from "./db/connect.js";

dotenv.config({ path: './.env' });
connectDB();


// IFI : immediate function invocation
// if you want to connect to the database immediately when the code for backend runs, then you can directly wirte the code in the index.js, in a IFI but it will just polute the page more 

// ;( async ()=>{
//   try {
    // await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//   } catch (error) {
//     console.error("error: ", error);
//   }  
// })()