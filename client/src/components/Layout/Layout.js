import { Container } from "@chakra-ui/react"


const Layout = ({children, title, description, keywords, ftPos, isEmpty}) => {
    return (
        <Container flexDirection={"row"}>
            <head>
                <title>{title}</title>
                <meta title="description" content={description} />
                <meta title="keywords" content={keywords} />
            </head>
            <main>
                {children}
            </main>
            <footer className={`footer ${ftPos} ${isEmpty && 'isEmpty'}`}>
                <h4>@Weather &copy; 2022</h4>
            </footer>
        </Container>
    )
};

export default Layout;

Layout.defaultProps = {
    title: "WEATHER WEB",
    description: "WEATHER WEB",
    keywords: "WEATHER WEB",
    ftPos: "mt-0",
    isEmpty: true
  };