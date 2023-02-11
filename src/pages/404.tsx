import ErrorComponent from "@/core/components/Error";
import { NextPage } from "next";

const NotFoundPage: NextPage = () => {
  return (
    <ErrorComponent
      title={"Not Found !"}
      statusCode={404}
      headline={"You have found a secret place."}
      description={
        "Unfortunately, this is a 404 page. You may have mistyped the address, or the page has been moved to another URL."
      }
    />
  );
};

export default NotFoundPage;
