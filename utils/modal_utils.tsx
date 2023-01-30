import { ModalOpenParams } from "../components/modal/modalWrapper";

export class Modal {
  _currentGlobalLoader = null; //reference variable

  /**
   * getting reference of bottom wrapper component
   */
  static registerModal(ref: React.Ref<any>) {
    (this as any)._currentGlobalLoader = ref;
  }

  static open({ ...args }: ModalOpenParams) {
    if ((this as any)._currentGlobalLoader) {
      ((this as any)._currentGlobalLoader as any).open({ ...args });
    }
  }

  static updateProps({ ...props }, index: number) {
    if ((this as any)._currentGlobalLoader) {
      ((this as any)._currentGlobalLoader as any).updateProps(
        { ...props },
        index
      );
    }
  }

  static close(index?: number) {
    if ((this as any)._currentGlobalLoader) {
      ((this as any)._currentGlobalLoader as any).close(index);
    }
  }

  //opening modal in a global scope
  // static openModal = (component) => {
  //   Modal.open({
  //     // title: "Modal Title",
  //     component: component,
  //     props: {
  //       callback: () => {
  //         //closes the modal
  //         Modal.close();
  //       },
  //       update: () => {
  //         //update the current modal props any where from the application using
  //         //this methods
  //         // Modal.updateProps(
  //         //   {
  //         //     data: "hello",
  //         //   },
  //         //   0
  //         // );
  //       },
  //     },
  //   });
  // };
}