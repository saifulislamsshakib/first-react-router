import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-pzge">
      <h1>Oops!!</h1>
      <h2>404 ERROR</h2>
      <p>Sorry, an unexpectrd error has occured.</p>
      <p>
        <i>{error.status.Text || error.message}</i>
      </p>
    </div>
  );
}
