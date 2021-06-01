import { Loader, Spinner, DoubleBounce1, DoubleBounce2 } from "./LoadingSpinner.styles";

function LoadingSpinner() {
  return (
    <Loader>
      <Spinner>
        <DoubleBounce1 />
        <DoubleBounce2 />
      </Spinner>
    </Loader>
  );
}

export default LoadingSpinner;
