import { FormEvent, useState } from 'react'
import styles from './PostComments.module.css'

import Comment from '../../models/Comment'

const PostComments = () => {
  const [comments, setComments] = useState<Comment[]>([])
  const [tempComment, setTempComment] = useState('')

  function handleAddComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newComment = new Comment(comments.length, tempComment)
    setTempComment('')
    setComments([...comments, newComment])
  }

  return (
    <div>
      <ul
        className={styles['post-comments']}
        data-testid="lista-comentarios"
      >
        {comments.map(({ comment, id }) => (
          <li
            key={id}
            className={styles['post-comment']}
            data-testid="comentario"
          >
            <p className={styles['post-comment-content']}>
              {comment}
            </p>
          </li>
        ))}
      </ul>

      <form
        onSubmit={handleAddComment}
        className={styles['post-comments-form']}
      >
        <textarea
          data-testid="campo-comentario"
          value={tempComment}
          onChange={e => setTempComment(e.target.value)}
          required
          className={styles['post-comments-form-textarea']}
        />

        <button
          type="submit"
          data-testid="botao-comentar"
          className={styles['post-comments-form-button']}
        >
          Comentar
        </button>
      </form>
    </div>
  )
}

export default PostComments