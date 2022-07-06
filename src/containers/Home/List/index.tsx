import ErrorBound from 'components/ErrorBound';
import { Children } from 'react';
import { useSelector } from 'react-redux';
import { EnumTodoFilterType, homeSelector } from '../store';
import ListItem from './ListItem';
import { SList } from './styles';

interface Props {}

export default function List(props: Props) {
  const { data, filter, keyword } = useSelector(homeSelector);

  const filterData = () => {
    let tmp = data.filter(d => d?.title?.toLowerCase().includes(keyword));
    if (filter === EnumTodoFilterType.ACTIVE) {
      tmp = tmp.filter(d => d.completed === false);
    } else if (filter === EnumTodoFilterType.COMPLETED) {
      tmp = tmp.filter(d => d.completed === true);
    }
    return tmp;
  };

  return (
    <ErrorBound>
      <SList>
        {filterData().length ? (
          Children.toArray(filterData().map(d => <ListItem key={d.id} d={d} />))
        ) : (
          <p style={{ textAlign: 'center' }}>No data</p>
        )}
      </SList>
    </ErrorBound>
  );
}

List.displayName = List;
