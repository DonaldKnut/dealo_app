import React, { FC } from "react";
import { Modal, Box } from "@mui/material";

type CustomModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: any;
  component: any;
  setRoute?: (route: string) => void;
};

const CustomModal: FC<CustomModalProps> = ({
  open,
  setOpen,
  setRoute,
  component: Component,
}) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-title"
    >
      <Box>
        <Component
          setOpen={setOpen}
          setRoute={setRoute}
          className="absolute top-[50%] left-[50%] -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none"
        />
      </Box>
    </Modal>
  );
};

export default CustomModal;
