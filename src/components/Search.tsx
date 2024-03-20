import { useState } from 'react';
import Button from "./Button";

interface Keyword {
    name: string;
    description: string;
    link: string;
}

const Search = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Keyword[]>([]);
    const keywords: Keyword[] = [
        { name: "React", description: "A JavaScript library for building user interfaces", link: "https://reactjs.org/" },
        { name: "SignUp", description: "Sign up section for users", link: "/signup" },
        { name: "Admin", description: "Administrative features and tools", link: "/admin" },
        { name: "User", description: "User-related functionalities", link: "/user" },
        { name: "CMS", description: "Content Management System", link: "/cms" },
        { name: "Log In", description: "Log in section for users", link: "/login" },
        { name: "Chat", description: "Real-time chat application", link: "/chat" },
        { name: "Message", description: "Messaging feature", link: "/message" },
        { name: "Ring", description: "Ring feature", link: "/ring" }
    ]; // List of keywords to search through

    const handleSearch = (event) => {
        event.preventDefault();
        if(searchTerm === '') {
            setSearchResults([]);
            return;
        } else {
            const result = keywords.filter(keyword => keyword.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchResults(result);
        }
    };

    return (
        <div className="min-vh-100">
            <div className="container-fluid h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="card">
                        <div className="card-body">
                            <form className="d-flex" role="search" onSubmit={handleSearch}>
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                                <button className="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="card mx-auto">
                    <div className="card-body">
                        {searchResults.length > 0 ? (
                            <div className="mt-3">
                                <h1 className="card-title">Search Results:</h1>
                                {searchResults.map((result, index) => (
                                    <div key={index} className="mt-3">
                                        <h6><a href={result.link}>{result.name}</a></h6>
                                        <p>{result.description}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="mt-3 ml-10">No results found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
