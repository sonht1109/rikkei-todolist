import ErrorBound from 'components/ErrorBound';
import { Children, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeSelector } from '../store';
import { getTodos, setData } from '../store/actions';
import ListItem from './ListItem';
import { SList } from './styles';

interface Props {}

export default function List(props: Props) {
  const { data, filter, keyword } = useSelector(homeSelector);

  const dp = useDispatch();

  useEffect(() => {
    dp(setData(getTodos({ filter, keyword })));
  }, [filter, keyword, dp]);

  return (
    <ErrorBound>
      <SList>
        {data.length ? (
          Children.toArray(data.map(d => <ListItem key={d.id} d={d} />))
        ) : (
          <p style={{ textAlign: 'center' }}>No data</p>
        )}
      </SList>
    </ErrorBound>
  );
}

List.displayName = List;
