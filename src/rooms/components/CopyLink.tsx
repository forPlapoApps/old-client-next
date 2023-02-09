import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { memo, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "flowbite-react";
import sleep from "util/sleep";
import useCurrentUrl from "hooks/useCurrentUrl";

const CopyLink = memo(() => {
  const [currentLink] = useCurrentUrl();

  const [icon, setIcon] = useState(faCopy);
  const handleOnCopy = async () => {
    setIcon(faCheck);
    await sleep(2000);
    setIcon(faCopy);
  };

  return (
    <>
      <CopyToClipboard text={currentLink} onCopy={handleOnCopy}>
        <Button color="dark" className="ml-auto copy-button">
          <FontAwesomeIcon icon={icon} className="text-2xl text-white w-5 h-5" />
        </Button>
      </CopyToClipboard>
    </>
  );
});

CopyLink.displayName = "CopyLink";

export default CopyLink;
