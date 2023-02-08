import { Button, Checkbox, Input, Modal, Row, Text } from "@nextui-org/react";

import Form from "../Form";
import { useState } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    
  };

  return (
    <div>
      <Button
        
        auto
        onPress={handler}
        className="relative rounded-lg  px-20 py-4 ring-red-500/50 dark:bg-black bg-white ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2"
      >
        <span className="absolute  inset-px z-10 grid place-items-center rounded-lg dark:bg-black bg-white bg-gradient-to-t dark:from-neutral-800 text-black dark:text-neutral-300">
          {`Let's talk`}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conics before:from-gray-200 before:via-pink-500 before:to-orange-400"
        />
      </Button>
      <Modal
        width="600px"
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        blur
        onClose={closeHandler}
      >
        <Modal.Header>
          <h5 className="text-3xl border-b border-b-gray-50 w-full py-2">Lets connect</h5>
        </Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
