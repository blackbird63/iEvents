import { MongoClient } from 'mongodb';

export async function connectDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://Yasser:MiUhVr5PljsHyIWI@cluster0.3alls8m.mongodb.net/events?retryWrites=true&w=majority'
    );
    return client;
}

export async function inserDocument(
    client: MongoClient,
    collection: string,
    document: any
) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getDocumentsById(client: MongoClient, collection : string, sort: any, id : string){
    const db = client.db();

        const documents = await db
            .collection(collection)
            .find({ eventId: id })
            .sort(sort)
            .toArray();
    return documents;
}
