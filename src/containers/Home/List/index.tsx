import ErrorBound from 'components/ErrorBound';
import ListItem from './ListItem';
import { SList } from './styles';

interface Props {

}

export default function List (props: Props) {

  return (
    <ErrorBound>
      <SList>
        {[1, 2, 3].map((_) => (
          <ListItem />
        ))}
      </SList>
    </ErrorBound>
  )
}

List.displayName = List;