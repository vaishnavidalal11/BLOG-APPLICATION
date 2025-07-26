import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-dprbufs-shard-00-00.otxswnu.mongodb.net:27017,ac-dprbufs-shard-00-01.otxswnu.mongodb.net:27017,ac-dprbufs-shard-00-02.otxswnu.mongodb.net:27017/?ssl=true&replicaSet=atlas-r7cad6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;