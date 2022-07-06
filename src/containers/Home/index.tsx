import ErrorBound from 'components/ErrorBound';
import { LOCAL_STORAGE_KEY } from 'helpers/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useInjectReducer from 'redux/useInjectReducer';
import Add from './Add';
import Handle from './Handle';
import List from './List';
import Search from './Search';
import { homeReducer } from './store';
import { setData } from './store/actions';
import { SHome } from './styles';

interface Props {}

export default function Home(props: Props) {
  useInjectReducer('home', homeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      const obj = JSON.parse(storedData);
      if (obj.data) {
        dispatch(setData(obj.data));
      }
    }
  }, [dispatch]);

  return (
    <ErrorBound>
      <SHome>
        <div className="home--container">
          <div className="header">Todo List</div>
          <div className="content">
            <div className="content__search">
              <Search />
              <Add />
            </div>

            <div className="content__handle">
              <Handle />
            </div>

            <div className="content__list">
              <List />
            </div>
          </div>
        </div>
      </SHome>
    </ErrorBound>
  );
}

Home.displayName = Home;
