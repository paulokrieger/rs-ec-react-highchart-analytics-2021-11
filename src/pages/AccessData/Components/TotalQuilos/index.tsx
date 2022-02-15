import Chart from "../../../../components/Chart";
import * as S from "./styles";
import Eye from "../../../../assets/eye.svg";
import { AnalyticsColors } from "../../../../constants";
import useAnalyticsData from "../../../../hook/useAnalyticsData";

export const TotalQuilos = () => {
    const { analyticsDataState } = useAnalyticsData();

    const options: Highcharts.Options = {
        title: {
            text: `<img src=${Eye} width="16" height="16" style="margin-right:8px;" alt="Ícone de view" /> Total de quilos produzido no período`,
            useHTML: true,
            align: "left",
            style: {
                padding: "30px",
                fontSize: "20px",
                color: AnalyticsColors.black,
                fontWeight: "bold",
                fontStyle: "Normal",
                fontFamily: "Inter",
            },
        },
        subtitle: {
            align: "right",
            text: `${[
                analyticsDataState?.totalQuilos?.total,
            ]} Quilos Produzidos`,
        },

        chart: {
            type: "column",
        },

        series: [
            {
                name: "Turno 1",
                type: "column",
                data: [analyticsDataState?.totalQuilos?.turno1.value],
                color: AnalyticsColors.ecWine,
            },
            {
                name: "Turno 2",
                type: "column",
                data: [analyticsDataState?.totalQuilos?.turno2.value],
                color: AnalyticsColors.purple,
            },
            {
                name: "Turno 3",
                type: "column",
                data: [analyticsDataState?.totalQuilos?.turno3.value],
                color: AnalyticsColors.darkGray,
            },
        ],

        tooltip: {
            enabled: false,
        },

        yAxis: {
            min: 0,
            title: {
                text: "",
            },
        },
        plotOptions: {
            column: {
                dataLabels: {
                    useHTML: true,
                    enabled: true,
                    color: AnalyticsColors.black,
                    inside: true,
                    verticalAlign: "bottom",
                    borderWidth: 3,
                    shadow: false,
                    style: {
                        fontSize: "36px",
                        fontWeight: "bold",
                        fontStyle: "Normal",
                        lineHeight: "44px",
                        fontFamily: "Inter",
                        textOutline: "0",
                        padding: "14px",
                    },
                },
            },
        },
    };

    return (
        <S.Wrapper>
            <Chart options={options} />
        </S.Wrapper>
    );
};

export default TotalQuilos;
