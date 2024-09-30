export declare const userApi: import("@reduxjs/toolkit/query").Api<import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, {
    getUser: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, void, "userApi">;
}, "userApi", never, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const useGetUserQuery: <R extends Record<string, any> = ({
    error?: undefined;
    data?: undefined;
    fulfilledTimeStamp?: undefined;
    originalArgs?: undefined;
    requestId?: undefined;
    endpointName?: string;
    startedTimeStamp?: undefined;
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    isLoading: false;
    currentData?: void;
    isFetching: false;
    isSuccess: false;
    isError: false;
    isUninitialized: true;
} | {
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError;
    fulfilledTimeStamp?: number;
    originalArgs?: void;
    requestId?: string;
    endpointName?: string;
    startedTimeStamp?: number;
    status: import("@reduxjs/toolkit/query").QueryStatus;
    currentData?: void;
    isUninitialized: false;
    isSuccess: false;
    isError: false;
    isLoading: true;
    isFetching: boolean;
    data: undefined;
} | {
    originalArgs?: void;
    requestId?: string;
    endpointName?: string;
    startedTimeStamp?: number;
    status: import("@reduxjs/toolkit/query").QueryStatus;
    isLoading: false;
    currentData?: void;
    isUninitialized: false;
    isError: false;
    isSuccess: true;
    isFetching: true;
    error: undefined;
    data: void;
    fulfilledTimeStamp: number;
} | {
    originalArgs?: void;
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
    data: void;
    fulfilledTimeStamp: number;
    currentData: void;
} | {
    data?: void;
    fulfilledTimeStamp?: number;
    originalArgs?: void;
    requestId?: string;
    endpointName?: string;
    startedTimeStamp?: number;
    status: import("@reduxjs/toolkit/query").QueryStatus;
    isLoading: false;
    currentData?: void;
    isUninitialized: false;
    isFetching: false;
    isSuccess: false;
    isError: true;
    error: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError;
}) & {
    status: import("@reduxjs/toolkit/query").QueryStatus;
}>(arg: void | typeof import("@reduxjs/toolkit/query").skipToken, options?: import("@reduxjs/toolkit/query").SubscriptionOptions & {
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
        currentData?: void;
        isFetching: false;
        isSuccess: false;
        isError: false;
        isUninitialized: true;
    } | {
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError;
        fulfilledTimeStamp?: number;
        originalArgs?: void;
        requestId?: string;
        endpointName?: string;
        startedTimeStamp?: number;
        status: import("@reduxjs/toolkit/query").QueryStatus;
        currentData?: void;
        isUninitialized: false;
        isSuccess: false;
        isError: false;
        isLoading: true;
        isFetching: boolean;
        data: undefined;
    } | {
        originalArgs?: void;
        requestId?: string;
        endpointName?: string;
        startedTimeStamp?: number;
        status: import("@reduxjs/toolkit/query").QueryStatus;
        isLoading: false;
        currentData?: void;
        isUninitialized: false;
        isError: false;
        isSuccess: true;
        isFetching: true;
        error: undefined;
        data: void;
        fulfilledTimeStamp: number;
    } | {
        originalArgs?: void;
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
        data: void;
        fulfilledTimeStamp: number;
        currentData: void;
    } | {
        data?: void;
        fulfilledTimeStamp?: number;
        originalArgs?: void;
        requestId?: string;
        endpointName?: string;
        startedTimeStamp?: number;
        status: import("@reduxjs/toolkit/query").QueryStatus;
        isLoading: false;
        currentData?: void;
        isUninitialized: false;
        isFetching: false;
        isSuccess: false;
        isError: true;
        error: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError;
    }) & {
        status: import("@reduxjs/toolkit/query").QueryStatus;
    }) => R;
}) => [R][R extends any ? 0 : never] & {
    refetch: () => import("@reduxjs/toolkit/query").QueryActionCreatorResult<import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, void, "userApi">>;
};
