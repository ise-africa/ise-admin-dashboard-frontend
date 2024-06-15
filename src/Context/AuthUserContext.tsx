import axios from "axios";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SetURLSearchParams } from "react-router-dom";

export type requestType = {
    isLoading: boolean;
    data: null | any[] | string;
    error: null | any;
};

type AuthUserContextValueType = {
    userLoginInfo: {
        email: string | null;
        password: string | null;
    };
    setUserLoginInfo: Dispatch<
        SetStateAction<{
            email: string | null;
            password: string | null;
        }>
    >;
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
    fetchCountries: () => void;
    countriesRequestObject: requestType;
    setCountriesRequestObject: Dispatch<SetStateAction<requestType>>;
};

type AuthUserContextProviderTypes = {
    children: React.ReactNode;
};

export const AuthUserContext = createContext<AuthUserContextValueType>(
    {} as AuthUserContextValueType
);

const AuthUserContextProvider = ({
    children,
}: AuthUserContextProviderTypes) => {
    // States
    const [userLoginInfo, setUserLoginInfo] = useState<{
        email: string | null;
        password: string | null;
    }>({
        email: null,
        password: null,
    });
    const [countriesRequestObject, setCountriesRequestObject] =
        useState<requestType>({
            isLoading: false,
            data: null,
            error: null,
        });

    // Query Params
    const [searchParams, setSearchParams] = useSearchParams();

    // Requests
    const fetchCountries = () => {
        setCountriesRequestObject({
            isLoading: true,
            data: null,
            error: null,
        });
        axios
            .get(`https://restcountries.com/v3.1/all?fields=name`)
            .then((res) => {
                setCountriesRequestObject({
                    isLoading: false,
                    data: res.data,
                    error: null,
                });
            })
            .catch((err) => {
                console.log(err);
                setCountriesRequestObject({
                    isLoading: false,
                    data: null,
                    error: err?.response?.data?.message,
                });
            });
    };

    return (
        <AuthUserContext.Provider
            value={{
                userLoginInfo,
                setUserLoginInfo,
                searchParams,
                setSearchParams,
                fetchCountries,
                countriesRequestObject,
                setCountriesRequestObject,
            }}
        >
            {children}
        </AuthUserContext.Provider>
    );
};

export default AuthUserContextProvider;
