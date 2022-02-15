import Header from "../../components/Header";
import { AnalyticsDataContextProvider } from "../../context/AnalyticsData/indext";
import * as S from "./styles";
import * as C from "./Components";

const AccessData = () => (
    <AnalyticsDataContextProvider>
        <Header />
        <S.Content>
            <C.TotalPecas />
            <C.TotalQuilos />
            <C.TotalQuilosPerMonth />
            <C.TotalPecasPerMonth />
            <C.PorcentageOfStop />
        </S.Content>
    </AnalyticsDataContextProvider>
);

export default AccessData;
