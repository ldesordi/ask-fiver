import { QueryClient, QueryClientProvider } from "react-query";
import UpdateAccountService from '../../../services/api/account/updateAccountService'

const UpdateAccountComp = () => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <UpdateAccountService />
            </div>
        </QueryClientProvider>
    );
}

export default UpdateAccountComp