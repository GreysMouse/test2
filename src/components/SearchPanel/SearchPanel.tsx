import './styles/search-panel.css';

interface ISearchPanel {

}

const SearchPanel = ({ children }: React.PropsWithChildren<ISearchPanel>): JSX.Element => {
  return (
    <div className='search-panel'>
      { children }
    </div>
  )
}

export default SearchPanel;
