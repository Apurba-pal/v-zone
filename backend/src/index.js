// this file is basically to execute all the other files from the backend. some may write the app.js(server) in the index itslelf. 

import dotenv from "dotenv";
import connectDB from "./db/connect.js";

dotenv.config({ path: "./.env" });
connectDB()
  .then(() => {
    app.on("error",(error)=>{
        console.error("Server error: ",error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Mongo DB connection failed ", error);
  });

// IFI : immediate function invocation
// if you want to connect to the database immediately when the code for backend runs, then you can directly wirte the code in the index.js, in a IFI but it will just polute the page more

// ;( async ()=>{
//   try {
// await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//   } catch (error) {
//     console.error("error: ", error);
//   }
// })()
