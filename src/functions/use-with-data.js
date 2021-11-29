import React, {useState, useEffect} from 'react';

export const useWithData = (Component, url, props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted = true;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (isMounted) setData(data);
            })
            .catch((e) => console.log(e));

        return () => {
            isMounted = false;
        };
    }, [url]);

    console.log('data', data);

    if (!data) return <div className='loader'>LOADER</div>;

    return <Component {...props} data={data} />;
};