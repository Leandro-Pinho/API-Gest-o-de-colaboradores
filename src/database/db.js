import mongoose from "mongoose";


const connectDatabase = (username, password) => {
    console.log("Wait connected with successfully")

    mongoose
        .connect(
            `mongodb+srv://${username}:${password}@cluster0.gikdkfd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
            // { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log("Database connected with successfully"))
        .catch((error) => console.log(`Error connection ${error}`))
}

export default connectDatabase;