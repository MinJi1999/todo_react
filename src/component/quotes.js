import * as React from "react";

function Quote() {
    const [quote, setQuote] = React.useState('');
    const [author, setAuthor] = React.useState('');

    const getQuote = () => {
        var xml = new XMLHttpRequest();
            xml.open("GET", "https://api.quotable.io/random");
            xml.responseType = "json";
            xml.onreadystatechange = function () {
                if (this.status === 200 && this.readyState === this.DONE) {
                    setQuote(xml.response.content);
                    setAuthor(xml.response.author);
                }
            }
            xml.send();
    }
    
     React.useEffect(() => {
        const interval = setInterval(getQuote, 5000);
        return () => {
            clearInterval(interval);
        }
    },[])
    return (
        <div className="quote_section">
            <div className="quote_container">
                <div className="quote_text">{quote}</div>
                <div className="quote_Author">{author}</div>
            </div>
        </div>
    )
}

   

export default Quote;