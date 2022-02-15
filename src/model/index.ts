export type AnalyticsData = {
    totalQuilos: {
        turno1: {
            value: number;
        };
        turno2: {
            value: number;
        };
        turno3: {
            value: number;
        };
        total: number;
    };
    totalPecas: {
        turno1: {
            value: number;
        };
        turno2: {
            value: number;
        };
        turno3: {
            value: number;
        };
        total: number;
    };
    totalQuilosMonth: {
        months: Array<number[]>;
    };
    totalPecasMonth: {
        months: Array<number[]>;
    };
    totalStops: {
        rupturaFio: {
            porcentage: number;
            value: number;
        };
        intervalo: {
            porcentage: number;
            value: number;
        };
        pecaAcabada: {
            porcentage: number;
            value: number;
        };
        outros: {
            porcentage: number;
            value: number;
        };
        all: number;
    };
};
