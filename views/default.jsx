const React = require('react')
 
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/style.css"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            {/* link to the home page */}
                            <a href="/">Home</a>
                        </li>
                        <li>
                            {/* link to the index page */}
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            {/* link to the new form */}
                            <a href="/places/new">Add Places</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def