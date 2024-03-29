import { useEffect, useState, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

function Comments(props: any) {
    const { eventId } = props;

    const notificationCtx = useContext(NotificationContext);

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [isFetchingComments, setIsFetchingComments] = useState(false);

    useEffect(() => {
        if (showComments) {
            setIsFetchingComments(true);
            fetch('/api/comments/' + eventId)
                .then((response) => response.json())
                .then((data) => {
                    setComments(data.comments);
                    console.log(data);
                    setIsFetchingComments(false);
                });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showComments]);

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    function addCommentHandler(commentData: any) {
        notificationCtx.showNotification({
            title: 'Sending comment...',
            message: 'Your comment is currently being stored into database',
            status: 'pending',
        });

        fetch('/api/comments/' + eventId, {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async (response) => {
                if (response.ok) {
                    return response.json();
                }
                const data = await response.json();
                throw new Error(data.message || 'Something went wrong!');
            })
            .then((data) => {
                notificationCtx.showNotification({
                    title: 'Success.',
                    message: 'Your comment was saved.',
                    status: 'success',
                });
            })
            .catch((error) => {
                notificationCtx.showNotification({
                    title: 'Error',
                    message: error.message || 'Something went wrong.',
                    status: 'error',
                });
            });
    }

    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && !isFetchingComments && (
                <CommentList items={comments} />
            )}
            {showComments && isFetchingComments && <p>Loading...</p>}
        </section>
    );
}

export default Comments;
