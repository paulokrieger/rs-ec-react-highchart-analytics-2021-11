import styled from "styled-components";
import { device } from "../../constants";

export const Content = styled.section`
    padding: 80px;

    display: grid;
    grid-template-rows: auto;
    row-gap: 46px;
    column-gap: 40px;

    grid-template:
        "totalQuilos totalPecas" minmax(auto, auto)
        "totalPecasPerMonth totalPecasPerMonth" minmax(auto, auto)
        "totalQuilosPerMonth totalQuilosPerMonth" minmax(auto, auto)
        "porcentageOfStop porcentageOfStop" minmax(auto, auto)
        / 850px;

    @media ${device.lg} {
        grid-template:
            "totalQuilos totalPecas" minmax(auto, auto)
            "totalPecasPerMonth totalPecasPerMonth" minmax(auto, auto)
            "porcentageOfStop porcentageOfStop" minmax(auto, auto)
            / 652px;
    }

    @media ${device.md} {
        grid-template:
            "totalQuilos" minmax(auto, auto)
            "totalPecas" minmax(auto, auto)
            "totalPecasPerMonth" minmax(auto, auto)
            "totalQuilosPerMonth" minmax(auto, auto)
            "porcentageOfStop" minmax(auto, auto)
            / 900px;

        justify-content: center;
    }

    @media ${device.sm} {
        grid-template:
            "totalQuilos" minmax(auto, auto)
            "totalPecas" minmax(auto, auto)
            "totalPecasPerMonth" minmax(auto, auto)
            "totalQuilosPerMonth" minmax(auto, auto)
            "porcentageOfStop" minmax(auto, auto)
            / 600px;
    }

    @media ${device.xs} {
        grid-template:
            "totalQuilos" minmax(auto, auto)
            "totalPecas" minmax(auto, auto)
            "totalPecasPerMonth" minmax(auto, auto)
            "totalQuilosPerMonth" minmax(auto, auto)
            "porcentageOfStop" minmax(auto, auto)
            / 400px;
    }
`;
