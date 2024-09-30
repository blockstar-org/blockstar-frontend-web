export declare const pokemonApi: import("@reduxjs/toolkit/query").Api<import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, {
    getPokemonByName: import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "pokemonApi">;
}, "pokemonApi", never, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const useGetPokemonByNameQuery: <R extends Record<string, any> = ({
    error?: undefined;
    data?: undefined;
    fulfilledTimeStamp?: undefined;
    originalArgs?: undefined;
    requestId?: undefined;
    endpointName?: string;
    startedTimeStamp?: undefined;
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    isLoading: false;
    currentData?: any;
    isFetching: false;
    isSuccess: false;
    isError: false;
    isUninitialized: true;
} | {
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError;
    fulfilledTimeStamp?: number;
    originalArgs?: string;
    requestId?: string;
    endpointName?: string;
    startedTimeStamp?: number;
    status: import("@reduxjs/toolkit/query").QueryStatus;
    currentData?: any;
    isUninitialized: false;
    isSuccess: false;
    isError: false;
    isLoading: true;
    isFetching: boolean;
    data: undefined;
} | {
    originalArgs?: string;
    requestId?: string;
    endpointName?: string;
    startedTimeStamp?: number;
    status: import("@reduxjs/toolkit/query").QueryStatus;
    isLoading: false;
    currentData?: any;
    isUninitialized: false;
    isError: false;
    isSuccess: true;
    isFetching: true;
    error: undefined;
    data: any;
    fulfilledTimeStamp: number;
} | {
    originalArgs?: string;
    requestId?: string;
    endpointName?: string;
    startedTimeStamp?: number;
    status: import("@reduxjs/toolkit/query").QueryStatus;
    isLoading: false;
    isUninitialized: false;
    isError: false;
    isSuccess: true;
    isFetching: false;
    error: undefined;
    data: any;
    fulfilledTimeStamp: number;
    currentData: any;
} | {
    data?: any;
    fulfilledTimeStamp?: number;
    originalArgs?: string;
    requestId?: string;
    endpointName?: string;
    startedTimeStamp?: number;
    status: import("@reduxjs/toolkit/query").QueryStatus;
    isLoading: false;
    currentData?: any;
    isUninitialized: false;
    isFetching: false;
    isSuccess: false;
    isError: true;
    error: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError;
}) & {
    status: import("@reduxjs/toolkit/query").QueryStatus;
}>(arg: string | typeof import("@reduxjs/toolkit/query").skipToken, options?: import("@reduxjs/toolkit/query").SubscriptionOptions & {
    skip?: boolean;
    refetchOnMountOrArgChange?: number | boolean;
} & {
    skip?: boolean;
    selectFromResult?: (state: ({
        error?: undefined;
        data?: undefined;
        fulfilledTimeStamp?: undefined;
        originalArgs?: undefined;
        requestId?: undefined;
        endpointName?: string;
        startedTimeStamp?: undefined;
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        isLoading: false;
        currentData?: any;
        isFetching: false;
        isSuccess: false;
        isError: false;
        isUninitialized: true;
    } | {
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError;
        fulfilledTimeStamp?: number;
        originalArgs?: string;
        requestId?: string;
        endpointName?: string;
        startedTimeStamp?: number;
        status: import("@reduxjs/toolkit/query").QueryStatus;
        currentData?: any;
        isUninitialized: false;
        isSuccess: false;
        isError: false;
        isLoading: true;
        isFetching: boolean;
        data: undefined;
    } | {
        originalArgs?: string;
        requestId?: string;
        endpointName?: string;
        startedTimeStamp?: number;
        status: import("@reduxjs/toolkit/query").QueryStatus;
        isLoading: false;
        currentData?: any;
        isUninitialized: false;
        isError: false;
        isSuccess: true;
        isFetching: true;
        error: undefined;
        data: any;
        fulfilledTimeStamp: number;
    } | {
        originalArgs?: string;
        requestId?: string;
        endpointName?: string;
        startedTimeStamp?: number;
        status: import("@reduxjs/toolkit/query").QueryStatus;
        isLoading: false;
        isUninitialized: false;
        isError: false;
        isSuccess: true;
        isFetching: false;
        error: undefined;
        data: any;
        fulfilledTimeStamp: number;
        currentData: any;
    } | {
        data?: any;
        fulfilledTimeStamp?: number;
        originalArgs?: string;
        requestId?: string;
        endpointName?: string;
        startedTimeStamp?: number;
        status: import("@reduxjs/toolkit/query").QueryStatus;
        isLoading: false;
        currentData?: any;
        isUninitialized: false;
        isFetching: false;
        isSuccess: false;
        isError: true;
        error: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError;
    }) & {
        status: import("@reduxjs/toolkit/query").QueryStatus;
    }) => R;
}) => [R][R extends any ? 0 : never] & {
    refetch: () => import("@reduxjs/toolkit/query").QueryActionCreatorResult<import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, any, "pokemonApi">>;
};
