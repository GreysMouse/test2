import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { usersAPI } from '../APIs/usersAPI';
import { IUser } from '../../types/user';
import { TSort } from '../../types/sorting';
import { compareObjectsByDateAsc } from '../methods/compareObjectsByDateAsc';
import { compareObjectsByDateDesc } from '../methods/compareObjectsByDateDesc';
import { compareObjectsByRatingAsc } from '../methods/compareObjectsByRatingAsc';
import { compareObjectsByRatingDesc } from '../methods/compareObjectsByRatingDesc';

const initialState = {
  initialUsers: [] as IUser[],
  sortedInitialUsers: [] as IUser[],
  foundUsers: [] as IUser[],
  displayedUsers: [] as IUser[],
  sorting: '' as TSort,
  searchQuery: '' as string,
  userForDelete: '' as string
}

export const getUsers = createAsyncThunk('users/getUsers', () => {
  return usersAPI.getUsers().then(users => users);
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSorting: (state, action: { payload: TSort }) => {
      state.sorting = action.payload;
    },
    sortUsers: (state, action: { payload: TSort }) => {
      const compareFunctions = {
        'regdate_asc': compareObjectsByDateAsc,
        'regdate_desc': compareObjectsByDateDesc,
        'rating_asc': compareObjectsByRatingAsc,
        'rating_desc': compareObjectsByRatingDesc
      }
      if (action.payload) {
        state.sortedInitialUsers = [ ...state.initialUsers ].sort(compareFunctions[ action.payload ]);
        state.foundUsers = [ ...state.foundUsers ].sort(compareFunctions[ action.payload ]);
        state.displayedUsers = state.foundUsers.length ? state.foundUsers : state.sortedInitialUsers;
      }
    },
    searchUsers: (state, action: { payload: string }) => {
      state.searchQuery = action.payload;

      switch (action.payload) {
        case '': {
          state.foundUsers = [];
          state.displayedUsers = state.sortedInitialUsers;
          break;
        }
        default: {
          const query = action.payload.toLowerCase();

          state.foundUsers = state.sortedInitialUsers.filter(user => {
            const username = user.username.toLowerCase();
            const email = user.email.toLowerCase();

            return username.match(query) || email.match(query);
          });
          state.displayedUsers = state.foundUsers;
        }
      }
    },
    deleteUser: (state, action: { payload: string }) => {
      state.initialUsers = state.initialUsers.filter(user => user.id !== action.payload);
      state.sortedInitialUsers = state.sortedInitialUsers.filter(user => user.id !== action.payload);
      state.foundUsers = state.foundUsers.filter(user => user.id !== action.payload);
      state.displayedUsers = state.displayedUsers.filter(user => user.id !== action.payload);

      state.userForDelete = '';
    },
    setUserForDelete: (state, action: { payload: string }) => {
      state.userForDelete = action.payload;
    },
    resetUserForDelete: (state) => {
      state.userForDelete = '';
    },
    resetFilters: (state) => {
      state.foundUsers = [];
      state.sortedInitialUsers = state.initialUsers;
      state.displayedUsers = state.initialUsers;
      state.sorting = '';
      state.searchQuery = '';
    },
    setSearchQuery: (state, action: { payload: string }) => {
      state.searchQuery = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.initialUsers = action.payload;
        state.sortedInitialUsers = action.payload;
        state.displayedUsers = action.payload;
      })
      .addCase(getUsers.rejected, (_, action) => {
        console.log(action.error.message);
      })
  }
});

export const {
  setSorting,
  sortUsers,
  searchUsers,
  deleteUser,
  setUserForDelete,
  resetUserForDelete,
  resetFilters,
  setSearchQuery
} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
