import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { PAGINATION_STEP } from '../../constants';
import { setCurrentPage } from '../../utils/slices/pagesSlice';

import './styles/page-nav-panel.css';
import './styles/page-nav-panel__button.css';
import './styles/page-nav-panel__button_active.css';

const PageNavPanel = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector(state => state.pages.currentPage);
  const itemsCount = useAppSelector(state => state.users.displayedUsers.length);

  const pagesCount = Math.floor(itemsCount / PAGINATION_STEP) + (itemsCount % PAGINATION_STEP ? 1 : 0);

  React.useEffect(() => {
    if (currentPage > pagesCount) {
      dispatch(setCurrentPage(pagesCount || 1));
    }
  })

  const pagesArray = Array.from(Array(pagesCount), (_, i) => i + 1);

  const handlePageSelect = (pageNum: number) => {
    dispatch(setCurrentPage(pageNum));
  }

  return (
    <ul className='page-nav-panel'>
      {
        pagesArray.map(p => (
          <li className='page-nav-panel__item' key={ p }>
            <button
              className={ 'page-nav-panel__button' + (p === currentPage ? ' page-nav-panel__button_active' : '') }
              onClick={ () => handlePageSelect(p) }
            >
              { p }
            </button>
          </li>
        ))
      }
    </ul>
  )
}

export default PageNavPanel;
