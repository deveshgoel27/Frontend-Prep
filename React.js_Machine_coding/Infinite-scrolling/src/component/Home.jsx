import React, { useEffect, useRef, useState } from 'react'
import MovieComponent from './MovieComponent';
import Loading from './Loading';

const Home = () => {

    const [card, setCard] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setloading] = useState(true);

    // Track fetched pages to avoid double-fetch
    //     Set is a JavaScript data structure that holds unique values.
    // useRef() keeps its value persistent across re-renders, but doesn’t trigger re-renders when it changes.

    const fetchedPages = useRef(new Set());

    const fetchData = async () => {
        console.log("FETCHING page:", page);
        setloading(true);

        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
        );
        const data = await res.json();
        // console.log(data);
        setCard((prev) => [...prev, ...data]);
        setloading(false);
    };

    useEffect(() => {
        if (!fetchedPages.current.has(page)) {
            fetchedPages.current.add(page);
            fetchData();
        } else {
            console.log("⚠️ Skipping already-fetched page:", page);
        }
    }, [page]);   //This runs whenever page changes (like when the user scrolls).

    const handleScroll = async () => {
        // document.documentElement.scrollHeight);  --> returns the height of the entire document, in pixels.
        // window.innerHeight);  -->  returns the inner height of the window (the height of the browser window's viewport), in pixels.
        // document.documentElement.scrollTop);  --> returns the number of pixels that the document has been scrolled vertically.
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight &&
                !loading
            ) {
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]);  // keep fresh loading value

    return (
        <div>
            <MovieComponent movieinfo={card} />
            {loading && <Loading />}
        </div>
    )
}

export default Home