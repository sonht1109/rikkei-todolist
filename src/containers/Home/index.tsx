import ErrorBound from 'components/ErrorBound';
import Add from './Add';
import Handle from './Handle';
import List from './List';
import Search from './Search';
import { SHome } from './styles';

interface Props {}

export default function Home(props: Props) {
  return (
    <ErrorBound>
      <SHome>
        <div className="home--container">
          <div className="header">Todo List</div>
          <div className="content">
            <div className="content__search">
              <Search
                onSearch={val => {
                  console.log(val);
                }}
              />
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
