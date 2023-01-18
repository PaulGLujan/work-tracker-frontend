import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import H1 from "../components/H1";
import P from "../components/P";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  let errorMessage = null;
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.error?.message;
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <H1>Oops!</H1>
      <P>Sorry, an unexpected error has occurred.</P>
      <P>
        <i>{errorMessage}</i>
      </P>
    </div>
  );
};

export default ErrorPage;
