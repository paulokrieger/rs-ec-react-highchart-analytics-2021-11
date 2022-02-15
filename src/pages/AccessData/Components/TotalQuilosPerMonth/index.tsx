import { TooltipFormatterContextObject } from "highcharts";
import Chart from "../../../../components/Chart";
import CustomChartTitle from "../../../../components/CustomChartTitle";
import { AnalyticsColors } from "../../../../constants";
import useAnalyticsData from "../../../../hook/useAnalyticsData";
import * as S from "./styles";

const TotalQuilosPerMonth = () => {
    const { analyticsDataState } = useAnalyticsData();
    const options: Highcharts.Options = {
        title: {
            text: "",
        },

        xAxis: {
            type: "datetime",

            title: {
                text: "",
            },

            labels: {
                format: "{value: %b}",
            },
        },

        yAxis: {
            title: {
                text: "",
            },
        },

        series: [
            {
                type: "column",
                name: "Total de quilos produzidos",
                color: AnalyticsColors.purple,
                data: analyticsDataState.totalQuilosMonth?.months || [
                    [1604199600000, 0],
                ],
            },
        ],

        legend: {
            enabled: false,
        },

        tooltip: {
            useHTML: true,
            formatter() {
                const self: TooltipFormatterContextObject = this;
                return `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1">
                <h1 style="font-size: 30px; font-family: Inter; color: ${AnalyticsColors.black}; margin: 0px;"> ${self.point.y}</h1>
                <span style="font-size: 16px; font-weight: 500; font-style: normal; color: ${AnalyticsColors.darkGray}"> Quilos produzidos</span>
                </div>`;
            },
        },
    };
    return (
        <S.Wrapper>
            <CustomChartTitle
                title="Total de quilos produzidos por mês"
                description="Acompanhe a quantidade de quilos produzidos mês a mês, referente ao período selecionado"
            />

            <Chart options={options} />
        </S.Wrapper>
    );
};

export default TotalQuilosPerMonth;
