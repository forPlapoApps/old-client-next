import ErrorComponent from "@/core/components/Error";
import { NextPage } from "next";

const InternalServerErrorPage: NextPage = () => {
  return (
    <ErrorComponent
      title="Server Error"
      statusCode={500}
      headline="Something bad just happened..."
      description="Our servers could not handle your request. Try refreshing the page."

    />
  );
};

export default InternalServerErrorPage;
