import { Modal } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import React from "react";
import { ModalProps } from "../../models/modal_props";
import { Modal as ModalUtil } from "../../utils/modal_utils";


function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: 'white',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));

export const ModalComponent = React.forwardRef(
  (propsValues: ModalProps, ref) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const {
      component: RenderInner,
      props,
      closable = true,
      onClose = () => { },
      closeModal = () => { },
      isVisible,
      // width = 500,
      // title,
      // className = "",
      // modalFooter,
      // closeable = true,
      // closeIcon = false,
      // centered = true,
    } = propsValues;


    const onModalClose = (isClose: any) => {
      if (!closable) return;
      if (isClose) {
        closeModal();
        onClose();
      }
      ModalUtil.close();
    };

    return (
      <Modal
        open={isVisible}
        // title={title}
        onClose={onModalClose}
      // footer={modalFooter ? modalFooter : null}
      // width={width}
      // className={className}
      // closeIcon={closeIcon}
      // closable={closeable}
      // centered={centered}
      >
        <div
          style={modalStyle} className={classes.paper}
        >
          {RenderInner && <RenderInner inModal={true} {...props} />}
        </div>
      </Modal>
    );
  }
);

ModalComponent.displayName = "ModalComponent";
