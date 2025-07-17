import { useRouteError } from "react-router-dom";
export const Errorpage=()=>{
    const error = useRouteError()
    console.log(error);
    return <h1>this is the error page </h1>;
}