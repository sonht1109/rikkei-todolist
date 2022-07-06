import Button from 'components/Button';
import ErrorBound from 'components/ErrorBound';
import { useSelector } from 'react-redux';
import { filters } from '../data';
import { homeSelector } from '../store';
import { handleFilter } from '../store/actions';
import { SHandle } from './styles';

interface Props {}

export default function Handle(props: Props) {
  // const { filter } = useSelector(homeSelector);

  return (
    <ErrorBound>
      <SHandle>
        {filters.map(f => (
          <Button
            onClick={() => handleFilter(f.filter)}
            // themeColor={filter === f.filter ? 'red' : 'gray'}
          >
            {f.label}
          </Button>
        ))}
      </SHandle>
    </ErrorBound>
  );
}

Handle.displayName = Handle;
