import Button from 'components/Button';
import ErrorBound from 'components/ErrorBound';

interface Props {}

export default function Add(props: Props) {
  return (
    <ErrorBound>
      <Button style={{flexGrow: 1}}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 4.16666V15.8333"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16666 10H15.8333"
            stroke="white"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Add new
      </Button>
    </ErrorBound>
  );
}

Add.displayName = Add;
