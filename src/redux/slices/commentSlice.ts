import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Comment {
  id: string;
  postId: string;
  body: string;
  author: string;
}

interface CommentState {
  comments: Comment[];
}

const initialState: CommentState = {
  comments: [],
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
    updateComment: (state, action: PayloadAction<Comment>) => {
      const index = state.comments.findIndex((comment) => comment.id === action.payload.id);
      if (index !== -1) {
        state.comments[index] = action.payload;
      }
    },
    deleteComment: (state, action: PayloadAction<string>) => {
      state.comments = state.comments.filter((comment) => comment.id !== action.payload);
    },
  },
});

export const { setComments, addComment, updateComment, deleteComment } = commentSlice.actions;

export const commentReducer = commentSlice.reducer;
