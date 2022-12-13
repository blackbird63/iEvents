import {
    connectDatabase,
    inserDocument,
    getDocumentsById,
} from '../../../helpers/db-util';

async function handler(req: any, res: any) {
    const eventId = req.query.eventId;

    let client;

    try {
        client = await connectDatabase();
    } catch (error) {
        res.status(500).json({ message: 'Connecting to database failed' });
        return;
    }

    if (req.method === 'POST') {
        const { email, name, text } = req.body;
        if (
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !text ||
            text.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });
            client.close();
            return;
        }

        interface NewComment {
            email: string;
            name: string;
            text: string;
            eventId: string;
            _id?: any;
        }

        const newComment: NewComment = {
            email,
            name,
            text,
            eventId,
        };

        let result;

        try {
            result = await inserDocument(client, 'comments', newComment);
            newComment._id = result?.insertedId;
            res.status(201).json({
                message: 'Added comment',
                comment: newComment,
            });
        } catch (error) {
            res.status(500).json({ message: 'Inserting data failed' });
        }
    }
    if (req.method === 'GET') {
        try {
            const documents = await getDocumentsById(
                client,
                'comments',
                { _id: -1 },
                eventId
            );
            res.status(200).json({ comments: documents });
        } catch (error) {
            res.status(500).json({ message: 'Getting comments failed' });
        }
    }
    client.close();
}

export default handler;
