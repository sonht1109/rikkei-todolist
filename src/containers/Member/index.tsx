import ErrorBound from 'components/ErrorBound';
import { memberReducer } from './store';
import useInjectReducer from 'redux/useInjectReducer';

interface Props {

}

export default function Member (props: Props) {
  useInjectReducer('member', memberReducer);

  return (
    <ErrorBound>
      <div></div>
    </ErrorBound>
  )
}

Member.displayName = Member;