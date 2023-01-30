import '../styles/globals.css'
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Modal as ModalUtil } from "../utils/modal_utils";
import { ModalWrapper } from "../components/modal/modalWrapper";
import { wrapper } from "../store/store";

let globalModalRef: any;

// O app está embrulhado pelo Redux através do wrapper. Assim o Redux é inicializado e disponibilizado globalmente no app. Para usar Redux nos componentes, tenho duas formas:
// - consumir este wrapper no componente.
// - usar os hooks useSelector e useDispacth no componante.
// Lebrando que
// só posso chamar os hooks dentro de functional components.
// A meta tag "viewport" do tipo "width=device-width" diz para o next exibir as pages na largura do device, o que é importante para responsividade em mobile.

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    ModalUtil.registerModal(globalModalRef);
  }, []);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
      <ModalWrapper ref={(ref) => (globalModalRef = ref)} />
    </Provider>
  );
};

export default MyApp;