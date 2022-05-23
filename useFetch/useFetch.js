import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    //console.log(state);

    useEffect(() => {
        return () => { isMounted.current = false; }
    }, []);

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(jsonData => {

                if (isMounted)
                    setState({
                        data: jsonData,
                        loading: false,
                        error: null
                    }); else { console.log('unmounted'); }

            }).catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'error! no se pudo leer la info'});
            });

    }, [url])

    return state;
}
