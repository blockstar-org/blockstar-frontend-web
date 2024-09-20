import { useRouteError } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../integration/redux/apis/basequery";
import { useAppDispatch, useAppSelector } from "../../integration/redux/hooks";
import { increment } from "../../integration/redux/slice/counterslice";
import { RootState } from "../../integration/redux/store";

interface RouteError {
  statusText?: string;
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  const count = useAppSelector((state: RootState) => state.counter.value);
  const {
    data,
    error: pokinmonError,
    isLoading,
  } = useGetPokemonByNameQuery("bulbasaur");

  const dispatch = useAppDispatch();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
