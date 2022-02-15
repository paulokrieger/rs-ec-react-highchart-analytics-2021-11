import { TooltipFormatterContextObject } from "highcharts";
import Chart from "../../../../components/Chart";
import { AnalyticsColors } from "../../../../constants";
import useAnalyticsData from "../../../../hook/useAnalyticsData";
import * as S from "./styles";

const PorcentageOfStop = () => {
    const { analyticsDataState } = useAnalyticsData();
    const options: Highcharts.Options = {
        title: {
            text: "Porcentagem de paradas",
            useHTML: true,
            style: {
                fontSize: "20px",
                color: AnalyticsColors.black,
                fontWeight: "bold",
                fontStyle: "normal",
                fontFamily: "Inter",
                padding: "20px",
            },
        },

        chart: {
            type: "pie",
        },

        series: [
            {
                type: "pie",
                innerSize: "60%",
                data: [
                    {
                        x: analyticsDataState?.totalStops?.rupturaFio?.value,
                        y: analyticsDataState?.totalStops?.rupturaFio
                            ?.porcentage,

                        color: AnalyticsColors.ecWine,
                        name: "Ruptura de Fio",
                    },
                    {
                        x: analyticsDataState?.totalStops?.pecaAcabada?.value,
                        y: analyticsDataState?.totalStops?.pecaAcabada
                            ?.porcentage,

                        color: AnalyticsColors.purple,
                        name: "Peça Acabada",
                    },
                    {
                        x: analyticsDataState?.totalStops?.intervalo?.value,
                        y: analyticsDataState?.totalStops?.intervalo
                            ?.porcentage,

                        color: AnalyticsColors.darkGray,
                        name: "Intervalo",
                    },
                ],
            },
        ],

        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                },
                showInLegend: true,
                cursor: "pointer",
                allowPointSelect: true,
            },
        },

        tooltip: {
            useHTML: true,
            formatter() {
                const self: TooltipFormatterContextObject = this;

                return `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1">
                <h1 style="font-size: 36px; font-family: Inter; color: ${AnalyticsColors.black}; margin: 0px;"> ${self.point.y}% </h1>
                <span style="font-size: 24px; font-weight: 500; font-style: normal; color: ${AnalyticsColors.darkGray}">${self.point.x} Paradas </span>
                </div>`;
            },
            positioner() {
                return { x: 70, y: 80 };
            },
        },
    };

    return (
        <S.Wrapper>
            <S.TotalOfAccess>
                <span>
                    <b>{analyticsDataState?.totalStops?.all}</b> Paradas
                </span>
            </S.TotalOfAccess>
            <Chart options={options} />
        </S.Wrapper>
    );
};

export default PorcentageOfStop;
