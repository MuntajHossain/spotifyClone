import { useEffect, useState } from "react";

const useSpotifyData = (access_token) => {
    const [data, setData] = useState();
    const [isBusy, setIsBusy] = useState(false);
    const [url, setUrl] = useState();

    useEffect(() => {
        var param = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + access_token,
            },
        };
        const fetchData = async (url, param) => {
            if (url) {
                setIsBusy(true);
                const response = await fetch(url, param);
                const resData = await response.json();
                console.log(access_token);
                console.log(url);
                console.log(resData);
                setData(resData);
                setIsBusy(false);
            }
        };
        fetchData(url, param);
    }, [access_token, url]);
    return [isBusy, data, setUrl];
};

export default useSpotifyData;
