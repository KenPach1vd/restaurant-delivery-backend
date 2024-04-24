import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://admim:19HP3jMhE98XsIbX@db-restaurant.rb775d4.mongodb.net/restaurant').then(()=>console.log("db con"));
}

export default connectDB